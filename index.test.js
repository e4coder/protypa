const protypa = require("./index");


/**
 * 
 */
it('write()#normal', () => {

        expect(

            protypa.write(

                'Hello, {{ name1 }} you }}are a {{ gender }}', 

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

            JSON.stringify(protypa.extract('Hello, {{ name1 }} you are a {{ gender }}'))

        )

        .toBe('{"name1":"","gender":""}')

    }

)



it('write()#Error:001', () => {
    try {
        protypa.write('Hello {{ Wo rld }}', { world: "World"})
    } catch (e) {
        expect(
            e.message
        ).toBe("variable name can not have whitespaces")
    }

})



it('extract()#Error:001', () => {
    try {
        protypa.write('Hello {{ Wo rld }}')
    } catch (e) {
        expect(
            e.message
        ).toBe("variable name can not have whitespaces")
    }

})

it('extract()#Meta', () => {
   expect(

        JSON.stringify(protypa.extract('noman is a good boy {{ nom|dom }} {{ asd }}'))

   ).toBe('{"nom":{"value":"","meta":"dom"},"asd":""}');
})

it('write()#Meta', () => {
    expect(

        protypa.write('noman is a good boy {{ nom|dom }} {{asd}}', {nom: "working", asd: "double Working"})

    ).toBe("noman is a good boy working double Working");
})
