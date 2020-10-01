const protypa = require("./index");


it('Save Simple Templates', () => {
    expect(protypa.save("this is{ a{ s}}}}}imple {{ var1 }} to see if it {{ var2  }}"))
    
    .toBe('{"variables":{"var1":{"value":"var1"},"var2":{"value":"var2"}}}');
});


it('Create a new Copy from templates', () => {
    expect(protypa.createNew({variables: {var1: {value: "test"}, var2: {value : "works"}}},"this is a simplee {{ var1 }} to see if it {{ var2  }}"))

    .toBe("this is a simplee test to see if it works");
})

it('write function revised core test', () => {
    expect(protypa.write('Hello, {{name1}} you are a {{gender}}', {name1:"Noman", gender: "Male"}))
    .toBe("Hello, Noman you are a Male")
})

it('generate', () => {
    expect(protypa.generateVariableObject('Hello, {{name1}} you are a {{gender}}'))
    .toBe('{"name1":"","gender":""}');
})