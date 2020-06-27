
const protypa = (getText, finishReadingVar, finalText, str) => {
    var readVar = false;
    var tempVar = "";
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
                    tempVar = "";
                }
            }

        } else if (readVar == true) {
            
            if(closeBracketToggle == true){
                closeBracketToggle = false;
            }
            if(str.charAt(i) !== " ") tempVar += str.charAt(i);
            if(str.charAt(i) == "}") throw console.error("Unexpected '}'");
            

        } else if (readVar == false) {
            if(openBracketToggle == true) openBracketToggle = false;            
            tempText += str.charAt(i);

        }
    }
    finalText(tempText);
}


module.exports = protypa;