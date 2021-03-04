"use strict";

const assert = require("assert");
const fun = require("./question1.js");
const funInTheSun = require("./question2.js");


/* 1a.	Write a function named checkPrime that accepts a parameter and returns true if the argument is a prime number otherwise returns false. */
describe("testPrime", function () {

    it("37 is prime", function () {
        assert.strictEqual(fun.testPrime(37), true);
    });
    it(" 77 is not prime", function () {
        assert.strictEqual(fun.testPrime(77), false);
    });
});

describe("areaOfCircle", function () {

    it("area of unit circle is Pi", function () {
        assert.strictEqual(funInTheSun.areaOfCircle(1), Math.PI * Math.PI);
    });
});