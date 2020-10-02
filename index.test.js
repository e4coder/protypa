const protypa = require("./index");


/**
 * 
 */
it('write()#normal', () => {

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
it('extract()#normal', () => {

        expect(

            JSON.stringify(protypa.extract('Hello, {{name1}} you are a {{gender}}'))

        )

        .toBe('{"name1":"","gender":""}')

    }

)