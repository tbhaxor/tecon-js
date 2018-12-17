const convertor = require(".");
const expect = require("chai").expect;


it("Celcius to Fahrenheit", done => {
    expect(convertor.ctof(0)).to.equal(32.00);
    expect(convertor.ctof(37)).to.equal(98.60);
    expect(convertor.ctof(89.6)).to.equal(193.28);
    done();
});


it("Celcius to Kelvin", done => {
    expect(convertor.ctok(0)).to.equal(273.15);
    expect(convertor.ctok(37)).to.equal(310.15);
    expect(convertor.ctok(89.6)).to.equal(362.75);
    done();
});

it("Fahrenheit to Celcius", done => {
    expect(convertor.ftoc(0)).to.equal(-17.78);
    expect(convertor.ftoc(37)).to.equal(2.78);
    expect(convertor.ftoc(89.6)).to.equal(32.00);
    done();
});

it("Fahrenheit to Kelvin", done => {
    expect(convertor.ftok(0)).to.equal(255.37);
    expect(convertor.ftok(37)).to.equal(275.93);
    expect(convertor.ftok(89.6)).to.equal(305.15);
    done();
});

it("Kelvin to Celcius", done => {
    expect(convertor.ktoc(0)).to.equal(-273.15);
    expect(convertor.ktoc(37)).to.equal(-236.15);
    expect(convertor.ktoc(89.6)).to.equal(-183.55);
    done();
});

it("Kelvin to Fahrenheit", done => {
    expect(convertor.ktof(0)).to.equal(-459.67);
    expect(convertor.ktof(37)).to.equal(-393.07);
    expect(convertor.ktof(89.6)).to.equal(-298.39);
    done();
});