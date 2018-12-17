# TeCon [![Build Status](https://travis-ci.org/tbhaxor/tecon-js.svg?branch=master)](https://travis-ci.org/tbhaxor/tecon-js)

A slim line temprature unit convertor library for nodejs

## Requirement

- Node
- NPM

## Install

```sh
npm i tecon
```

## Import and Use

```js
const conv = require("tecon");

// converting celcius to fahrenheit
console.log(conv.ctof(37)); // 98.6
```

## Functions

|       Function        | Notation in Code |
| :-------------------: | :--------------: |
| Celcius to Fahrenheit |       ctof       |
|   Celcius to Kelvin   |       ctok       |
| Fahrenheit to Celcius |       ftoc       |
| Fahrenheit to Kelvin  |       ftok       |
|   Kelvin to Celcius   |       ktoc       |
| Kelvin to Fahrenheit  |       ktof       |

## Contribution

Read the rules and guidlines written in [CONTRIBUTING.md](https://github.com/tbhaxor/tecon-js/blob/master/CONTRIBUTING.md)

## License

**Tecon** is licensed under [MIT License](https://github.com/tbhaxor/tecon-js/blob/master/LICENSE)
