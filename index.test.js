const protypa = require("./index");

var RpObj = {variables: {}}


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
    },str);

    return processedStr1;
}






it('installTemplate', () => {
    expect(installTemplate("this is{ a{ s}}}}}imple {{ var1 }} to see if it {{ var2  }}"))
    
    .toBe('{"variables":{"var1":"var1","var2":"var2"}}');
});

it('createText', () => {
    expect(createText({variables: {var1: "test", var2: "works"}},"this is a simplee {{ var1 }} to see if it {{ var2  }}"))

    .toBe("this is a simplee test to see if it works");
})








//initReport(str1);
//console.log(createReport({variables: {var1: "test", var2: "works"}},str1));
