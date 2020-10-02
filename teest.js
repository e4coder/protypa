const protypa = require('./index');

let str = "Hello {{name}}!";

console.log(protypa.write(str, {name: "Nomi"}));