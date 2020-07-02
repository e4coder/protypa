
const core = require('./core');

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


module.exports.save = save;
module.exports.createNew = createNew;