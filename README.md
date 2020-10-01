# prótypa

A simple text templating engine. It reads strings and looks for expressions embedded in curly braces and replaces the expression with a value stored in a variable. the project is in R&D phase, and the final product may be entirely different
feel free to suggest new features

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Example

```javascript
const protypa = require('protypa');


let result = protypa.write("Hello, {{name}}!", {name: "Jack"});

console.log(result);
```
output
```
Hello, Jack!
```
End with an example of getting some data out of the system or using it for a little demo

## Running the tests

To run automated test run the following command.

```
npm run watch
```

## Contribution Guide

* **Working on it!**

## Authors

* **Muhammad Noman** - [e4coder](https://github.com/e4coder)