# prótypa

A simple text templating engine. It reads strings and looks for expressions embedded in curly braces and replaces the expression with a value stored in a variable. the project is in R&D phase, and the final product may be entirely different
feel free to suggest new features

# Getting Started

**Instalation**
>npm i --save protypa

## Example - write()

```javascript
const { app } = require('protypa');

let str = "Hello, {{name}}!"

let result = app.write(str, {name: "Jack"});

console.log(result);
```
output
> Hello, Jack!


## Example - extract() 

* **Extracting single variable.**

```javascript
const { app } = require('protypa');

let str = "Hello, {{name}}!";

let result = app.extract(str);

console.log(JSON.stringify(result));
```
***output*** : `{"name":""}`



* **Extracting multiple variables.**

```javascript
const { app } = require('protypa');

let str = "Hello, {{name}}!. you are a {{gender}}";

let result = app.extract(str);

console.log(JSON.stringify(result));
```
***output*** : `{"name":"", "gender":""}`





# Contribution Guide

* **Working on it!**

## Authors

* **Muhammad Noman** - [e4coder](https://github.com/e4coder)