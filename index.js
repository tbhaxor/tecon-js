/**
 * @file index.js
 * @description Exporting all functionality
 * 
 * @author Gurkirat Singh <tbhaxor@gmail.com>
 */


module.exports = {
    ctof: celcius => parseFloat(Number((celcius * 9 / 5) + 32).toFixed(2)),
    ctok: celcius => parseFloat(Number(celcius + 273.15).toFixed(2)),
    ftoc: fahrenheit => parseFloat(Number((fahrenheit - 32) * 5 / 9).toFixed(2)),
    ftok: fahrenheit => parseFloat(Number((fahrenheit - 32) * 5 / 9 + 273.15).toFixed(2)),
    ktoc: kelvin => parseFloat(Number(kelvin - 273.15).toFixed(2)),
    ktof: kelvin => parseFloat(Number((kelvin - 273.15) * 9 / 5 + 32).toFixed(2)),
};