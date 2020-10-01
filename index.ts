import { CoreClass } from './core';

export let app = {

    core: new CoreClass(),

    extract: (str) => {

        //The result will hold the variables in its vars property 
        let result = { vars: {} }

        //We need the varCache to increment a character while 'ch.state' is "readingVar".
        let varCache = "";

        /**
         * the iterate() generator returns an iterator with char and its state. we need these states
         * in order to generate a json object. this json object holds variables that we made from
         * the string.
         * 
         * If the user wants to save the JSON file, the user then can change 
         */
        for (const ch of app.core.iterate(str)) {

            if (ch.state == "varStart") {

                varCache = ""

            }

            if (ch.state == "readingVar")

                varCache += ch.char;


            if (ch.state == "varEnd") {

                varCache = varCache.replace(" ", "");

                varCache = varCache.slice(0, -1);

                result.vars[varCache] = "";

            }

        }

        return result.vars;

    },

    write: (str, vars) => {

        let result = "";

        let varCache = "";

        for (const ch of app.core.iterate(str)) {

            if (ch.state == "read")

                result += ch.char;

            else if (ch.state == "varStart") {

                varCache = ""

                result = result.slice(0, -1)

            }

            else if (ch.state == "readingVar")

                varCache += ch.char;


            else if (ch.state == "varEnd") {

                varCache = varCache.replace(" ", ""); 

                varCache = varCache.slice(0, -1); 

                result += vars[varCache]; 

            }

        }

        return result;
    }
}


const iteration = (str, onStateRead, onStateVarStart, onStateReadingVar, onStateVarEnd) => {
    for (const ch of app.core.iterate(str)) {

        if (ch.state == "read")
            onStateRead();

        else if (ch.state == "varStart")
            onStateVarStart();

        else if (ch.state == "readingVar")
            onStateReadingVar();

        else if (ch.state == "varEnd")
            onStateVarEnd();

    }
}