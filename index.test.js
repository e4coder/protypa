const protypa = require("./index");
const str1 = "this is a simple {{ var1 }} to see if it {{ var2  }}";

var RpObj = {variables: {}}

//{"variables":{"var1":"var1","var2":"var2"}}

function installTemplate(str) {
    protypa(
    function(tempText){
    },
    
    function(tempVar){
        RpObj.variables[tempVar] = tempVar;
    },
    function(finalText){
    }, str);

    return JSON.stringify(RpObj);
}



function createText(RpObj_Processed, str) {
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






it('installTemplate', () => {
    expect(installTemplate("this is{ a} si{}mp}{le {{ var1 }} to see if it {{ var2  }}"))
    
    .toBe('{"variables":{"var1":"var1","var2":"var2"}}');
});

it('createText', () => {
    expect(createText({variables: {var1: "test", var2: "works"}},"this is a simple {{ var1 }} to see if it {{ var2  }}"))

    .toBe("this is a simple test to see if it works");
})








//initReport(str1);
//console.log(createReport({variables: {var1: "test", var2: "works"}},str1));
