/**
 * @file index.js
 * @description Exporting all functionality
 * 
 * @author Gurkirat Singh <tbhaxor@gmail.com>
 */


module.exports = {
    ctof: celcius => (celcius * 9 / 5) + 32,
    ctok: celcius => celcius + 273.15,
    ftoc: fahrenheit => (fahrenheit - 32) * 5 / 9,
    ftok: fahrenheit => (fahrenheit - 32) * 5 / 9 + 273.15,
    ktoc: kelvin => kelvin - 273.15,
    ktof: kelvin => (kelvin - 273.15) * 9 / 5 + 32,
};