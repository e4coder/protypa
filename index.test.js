const protypa = require("./index");


it('installTemplate', () => {
    expect(protypa.save("this is{ a{ s}}}}}imple {{ var1 }} to see if it {{ var2  }}"))
    
    .toBe('{"variables":{"var1":"var1","var2":"var2"}}');
});



it('createText', () => {
    expect(protypa.createNew({variables: {var1: "test", var2: "works"}},"this is a simplee {{ var1 }} to see if it {{ var2  }}"))

    .toBe("this is a simplee test to see if it works");
})
