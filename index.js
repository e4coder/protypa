
const core = require('./core.js');

const save = (str) => {

    var RpObj = {variables: {}};
    core(
    (tempText) => {
        //loops through text before and after variables and returns as tempText
    },
    
    (tempVar) => {
        RpObj.variables[tempVar.value] = tempVar;
    },
    (finalText) => {
    }, str);

    return JSON.stringify(RpObj);
}

const createNew = (RpObj_Processed, str) => {
    processedStr1 = "";
    core(
    (tempText) => {
        processedStr1 += tempText;
    },
    (tempVar) => {
        processedStr1 += RpObj_Processed.variables[tempVar.value].value;
    },
    (finalText) => {
        processedStr1 += finalText;
    },str);

    return processedStr1;
}

const generateVariableObject = (str) => {
    result = "";
    varCache = "";

    for (const ch of core.work(str)) {

        

        if (ch.state == "readingVar")
            varCache += ch.char;

            
        else if (ch.state == "varEnd"){
            varCache = varCache.replace(" ", "");
            varCache = varCache.slice(0, -1);
            result[varCache] = "";
        }
        
    }
    
    return JSON.stringify(result);
}

/**
 * 
 * @param {string} str - string for processing
 * @param {object} rp - input data
 */
const write = (str, rp) => {

    result = "";
    varCache = "";

    for (const ch of core.work(str)) {

        if(ch.state == "read")
            result += ch.char;

        else if (ch.state == "varStart") {
            varCache = ""
            result = result.slice(0, -1)
        }

        else if (ch.state == "readingVar")
            varCache += ch.char;

            
        else if (ch.state == "varEnd"){
            varCache = varCache.replace(" ", "");
            varCache = varCache.slice(0, -1);
            result += rp[varCache];
        }
        
    }
    
    return result;
}


module.exports.save = save;
module.exports.createNew = createNew;
module.exports.write = write;
module.exports.generateVariableObject = generateVariableObject;