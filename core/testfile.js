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
        console.log(cache2);
        
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





 for (const w of work("Hello,W {{ osrld!}}sdas{{ df }}das")) {
     if (w.state == "readingVar")
        console.log(w.char)
 }



 const write = (str, rp) => {

    result = "";
    varCache = "";

    for (const ch of work(str)) {

        if(ch.state == "read")
            result += ch.char;

        else if (ch.state == "varStart") {
            varCache = ""
            result = result.slice(0, -1)
        }

        else if (ch.state == "readingVar"){
            varCache += ch.char;
            console.log(ch.char);
        }
            
        else if (ch.state == "varEnd"){
            varCache = varCache.replace(" ", "");
            varCache = varCache.slice(0, -1);
            result += rp[varCache];
        }
        
    }
    
    return result;
}

console.log(write('Hello, {{name}} you are a {{gender}}', {name:"Noman", gender: "Male"}))




let itr_w = work("Hello, {{name}} ");

console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())
console.log(itr_w.next())



console.log(cache2);