
const protypa = (getText, finishReadingVar, finalText, str) => {
    var readVar = false;
    var tempVar = "";
    var tempText = [];
    var bracketToggle = false;

    for (var i = 0; i < str.length; i++) {
        if(str.charAt(i) === "{" && str.charAt(i++) === "{"){
            
            readVar = true;
            getText(tempText)
            tempText = "";

            continue;

        } else if (str.charAt(i) == "}" && str.charAt(i++) == "}") {
            
            readVar = false;
            finishReadingVar(tempVar);
            tempVar = "";
            
            continue;

        } else if (readVar == true) {
            
            if(str.charAt(i) !== " ") tempVar += str.charAt(i);

        } else if (readVar == false) {
            
            tempText += str.charAt(i);

        }
    }
    finalText(tempText);
}


module.exports = protypa;