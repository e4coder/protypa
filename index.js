var str1 = "a{{ var1 }} to  see if it {{ var2  }} asdasd dsa daasd ";
var processedStr1 = "";


var RpObj = {
    text: [],
    variables: {}
};
var finalJSON = "";


function report(getText, finishReadingVar, finalText, str) {
    var readVar = false;
    var tempVar = "";
    var tempText = []

    for (var i = 0; i < str.length; i++) {
        console.log(i);
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
            
            str.charAt(i) == " "? console.log("Empty"): tempVar += str.charAt(i);

        } else if (readVar == false) {
            
            tempText += str.charAt(i);

        }
    }
    finalText(tempText);
}










function initReport(str) {
    report(
    function(tempText){
        console.log(tempText);
    },
    
    function(tempVar){
        RpObj.variables[tempVar] = tempVar;
        
    },
    function(finalText){
        console.log(finalText);
    }, str);

    console.log(RpObj.variables.var1);
    console.log(RpObj.variables.var2);
}

function saveReportProperties(){
    finalJSON = JSON.stringify(RpObj);
    console.log(finalJSON);
}









function createReport(RpObj_Processed, str) {
    report(
    function(tempText){
        processedStr1 += tempText;
    },
    function(tempVar){
        processedStr1 += RpObj_Processed.variables[tempVar];
    },
    function(finalText){
        processedStr1 += finalText;
    },str1);
}



console.log(str1);
initReport(str1);
saveReportProperties();



RpObj_Processed = RpObj;
RpObj_Processed.variables.var1 = "Test";
RpObj_Processed.variables.var2 = "works";

createReport(RpObj_Processed, str1);

console.log("testssssssssss")
console.log(processedStr1);