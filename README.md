# prótypa

A simple text templating engine ( string interpolation ). It reads strings and looks for expressions embedded in curly braces and replaces the expression with a value stored in a variable.

# Getting Started

**Instalation**
>npm i --save protypa


## Basic Usage
```javascript
const protypa = require('protypa')

let doc = "... Hello, {{name}}, you have subscribed to our {{planName}} plan ..."

let extracted = protypa.extract(doc);

extracted.name = "Jack"
extracted.planName = "VIP"

let result = protypa.write(doc, extracted);

console.log(result)
```
output: `... Hello, Jack, you have subscribed to our VIP plan ...`


## Example - write()

```javascript
const protypa = require('protypa');

let str = "Hello, {{name}}!"

let result = protypa.write(str, {name: "Jack"});

console.log(result);
```
output
> Hello, Jack!


## Example - extract() 

* **Extracting single variable.**

```javascript
const protypa = require('protypa');

let str = "Hello, {{name}}!";

let result = protypa.extract(str);

console.log(JSON.stringify(result));
```
***output*** : `{"name":""}`



* **Extracting multiple variables.**

```javascript
const protypa = require('protypa');

let str = "Hello, {{name}}!. you are a {{gender}}";

let result = app.extract(str);

console.log(JSON.stringify(result));
```
***output*** : `{"name":"", "gender":""}`





# Contribution Guide

* **Working on it!**

## Authors

* **Muhammad Noman** - [e4coder](https://github.com/e4coder)