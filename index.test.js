const { app } = require("./index");


/**
 * 
 */
it('write()#normal', () => {

        expect(

            app.write(

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
it('expect()#normal', () => {

        expect(

            JSON.stringify(app.extract('Hello, {{name1}} you are a {{gender}}'))

        )

        .toBe('{"name1":"","gender":""}')

    }

)