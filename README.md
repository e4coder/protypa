# prótypa

A simple text templating engine.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Installing

A step by step series of examples that tell you how to get a development env running

Installing the package

```
npm install --save protypa
```

Example work!

```javascript
const protypa = require('protypa');

/**
    Here we save a template of the text with variable "name"
*/
templateJSON = JSON.parse(protypa.save('Hello {{name}}, welcome!'));


/**
    We process the template to apply the new data to a new copy of the template
*/
processedJSON = templateJSON;
processedJSON.variables.name.value = 'Anthony';


/**
    A new copy of the template with the value set instead of variable.
*/
result = protypa.createNew(processedJSON, 'Hello {{name}}, welcome!');
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

To run automated test run the following command.

```
npm run watch
```

## Authors

* **Muhammad Noman** - [e4coder](https://github.com/e4coder)

See also the list of [contributors](https://github.com/e4coder/protypa/contributors) who participated in this project.

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
