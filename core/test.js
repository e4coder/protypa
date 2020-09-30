

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
        
        if (state == "varStart")
            state = "readingVar"
        else if (state == "varEnd")
            state = "read";
            
        state = detectKeys(cache2, state);

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
    else if (cache == "}}")
        reworkedState = "varEnd";

    return reworkedState
}

function updateState () {
    
}





 for (const w of work("Hello,W {{ osrld!}}sdasdfdas")) {
     if (w.state == "readingVar")
        console.log(w.char)
 }






// let itr_w = work("Hello,W {{ osrld!}}sdasdfdas");

// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())
// console.log(itr_w.next())



// console.log(cache2);