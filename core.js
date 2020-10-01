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





let cache2 = "";

function* work (x) {
    let state = "read";
    let str = x;
    let itr_s = str[Symbol.iterator]();

    while(true) {
        holder = itr_s.next();
        
        if(holder.done == true) 
            return

        cache2 = updateCache(holder.value, cache2);
        //console.log(cache2);
        
        state = updateState(state, cache2);

        yield {char: holder.value, state: state};
    }
}



function updateCache(char, cache) {

    let reworkedCache = cache;

    if (cache.length >= 2) {
        reworkedCache = cache.substring(1)
        reworkedCache += char;
    } else reworkedCache += char;



    return reworkedCache;
}

function detectKeys (cache, state) {

    let reworkedState = state;

    if (cache == "{{")
        reworkedState = "varStart";

    if (cache == "}}")
        reworkedState = "varEnd";

    return reworkedState
}

function updateState (state, cache) {

    if (state == "varStart")
        state = "readingVar";

    else if (state == "varEnd")
        state = "read";
        
    state = detectKeys(cache, state);

    return state;
}

const generateVariableObject = (str) => {
    result;
    varCache = "";

    for (const ch of work(str)) {

        if (ch.state == "varStart") {
            varCache = ""
        }

        if (ch.state == "readingVar")
            varCache += ch.char;

            
        if (ch.state == "varEnd"){
            varCache = varCache.replace(" ", "");
            varCache = varCache.slice(0, -1);
            result[varCache] = "";
        }
        
    }
    
    return JSON.stringify(result);
}

generateVariableObject("Hello, {{name1}} you are a {{gender}}")


module.exports = core;
module.exports.work = work;