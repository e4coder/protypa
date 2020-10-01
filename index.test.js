const protypa = require("./index");

/**
 * 
 */
it('write function revised core test', () => {

        expect(

            protypa.write(

                'Hello, {{name1}} you }}are a {{gender}}', 

                {name1:"Noman", gender: "Male"}
                
            )

        )


        .toBe("Hello, Noman you }}are a Male")
    }

)



/**
 * 
 */
it('generateJson', () => {

        expect(

            protypa.generateVariableObject('Hello, {{name1}} you are a {{gender}}')

        )

        .toBe('{"name1":"","gender":""}')

    }

)