const protypa = require("./index");
const str1 = "this is a simple {{ var1 }} to see if it {{ var2 }}";

var RpObj = {variables: {}}

function initReport(str) {
    protypa(
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



function createReport(RpObj_Processed, str) {
    processedStr1 = "";
    protypa(
    function(tempText){
        processedStr1 += tempText;
    },
    function(tempVar){
        processedStr1 += RpObj_Processed.variables[tempVar];
    },
    function(finalText){
        processedStr1 += finalText;
    },str1);

    return processedStr1;
}





initReport(str1);
console.log(createReport({variables: {var1: "test", var2: "works"}},str1));
