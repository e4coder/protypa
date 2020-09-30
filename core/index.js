// TESTING CODE UNDER HERE

let testString = "this is a test string";

let stringIterator = testString[Symbol.iterator]();

let example;

// TESTING CODE ENDS HERE


export class Core {

    constructor() {}

    /**
     * 
     * @param {iterator} itr - A string iterator var:string[Symbol.iterator]()
     * 
     */
    iterate = (itr) => {

        let holder = itr.next();

        if (holder.done == false) {

            console.log(holder.value);

            this.iterate(itr);

        }
    }
}

module.exports.default = Core;

// TESTING CODE UNDER HERE

example = new revisedCore();


// TESTING CODE ENDS