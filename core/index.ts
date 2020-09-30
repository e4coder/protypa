
export class Core {

    charLib = []

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

    process = (char:string) => {

    }
}