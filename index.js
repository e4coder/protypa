
const core = (getText, finishReadingVar, finalText, str) => {
    var readVar = false;
    var tempVar = {value:""};
    var tempText = [];
    var openBracketToggle = false;
    var closeBracketToggle = false;

    for (var i = 0; i < str.length; i++) {
        if(str.charAt(i) === "{"){

            if(readVar == false){
                if(openBracketToggle == false){

                    tempText += str.charAt(i);
                    openBracketToggle = true;

                }else if (openBracketToggle == true) {

                    tempText = tempText.slice(0,-1);
                    openBracketToggle = false;
                    readVar = true;
                    getText(tempText);
                    tempText = "";

                }
            } else if (readVar == true)
                throw console.error("Unexpected '{'");
            

        } else if (str.charAt(i) == "}") {
            
            if(readVar == false){
                tempText += str.charAt(i);
            }else if (readVar == true){
                if(closeBracketToggle == false){
                    closeBracketToggle = true;
                }else if(closeBracketToggle == true){
                    closeBracketToggle = false;
                    readVar = false;
                    finishReadingVar(tempVar);
                    tempVar = {value:""};
                }
            }

        } else if (readVar == true) {
            
            if(closeBracketToggle == true){
                closeBracketToggle = false;
            }
            if(str.charAt(i) !== " ") tempVar.value += str.charAt(i);
            if(str.charAt(i) == "}") throw console.error("Unexpected '}'");
            

        } else if (readVar == false) {
            if(openBracketToggle == true) openBracketToggle = false;            
            tempText += str.charAt(i);

        }
    }
    finalText(tempText);
}

const save = (str) => {

    var RpObj = {variables: {}};
    core(
    (tempTexet) => {
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
        processedStr1 += RpObj_Processed.variables[tempVar.value];
    },
    (finalText) => {
        processedStr1 += finalText;
    },str);

    return processedStr1;
}


module.exports.save = save;
module.exports.createNew = createNew;
module.exports.core = core;