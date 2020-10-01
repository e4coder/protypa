
export class CoreClass {

    charLib = []
    cache2 = "";

    constructor() { }

    /**
     * 
     * @param {iterator} itr - A string iterator var:string[Symbol.iterator]()
     * 
     */
    *iterate (str:string)  {

        let state = "read";
        let itr_s = str[Symbol.iterator]();

        while (true) {
            let holder = itr_s.next();

            if (holder.done == true)
                return

            this.cache2 = this.updateCache(holder.value, this.cache2);

            state = this.updateState(state, this.cache2);

            yield { char: holder.value, state: state };
        }
    }

    updateCache(char, cache) {

        let reworkedCache = cache;
    
        if (cache.length >= 2) {
            reworkedCache = cache.substring(1)
            reworkedCache += char;
        } else reworkedCache += char;
    
    
    
        return reworkedCache;
    }

    detectKeys(cache, state) {

        let reworkedState = state;
    
        if (cache == "{{")
            reworkedState = "varStart";

        if (state == "readingVar" && cache == "}}")
            reworkedState = "varEnd";
            
    
        
    
        return reworkedState
    }
    
    updateState(state, cache) {
    
        if (state == "varStart")
            state = "readingVar";
    
        else if (state == "varEnd")
            state = "read";
    
        state = this.detectKeys(cache, state);
    
        return state;
    }
}