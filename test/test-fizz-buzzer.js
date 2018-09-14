//import chai
const expect = require('chai').expect;
//import fuzzbuzzer.js
const fizzBuzzer = require('../fizzBuzzer');

//unit tests for fizzBuzzer()
describe('fizzBuzzer', function() {

  //test normal case
  it('should return correct word for value of mod input', function() {
    //normal inputs
    const normalCases = [
      {a: 30, expected: 'fizz-buzz'},
      {a: 10, expected: 'buzz'},
      {a: 6, expected: 'fizz'},
    ];

    //test each set of inputs
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      console.log("Answer:", answer, "Expected:", input.expected);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    //bad inputs
    const badInputs = [
      ['a', 1],
      ['1', 2],
      [2, false]
    ];

    badInputs.forEach(function() {
      expect(function() {
        fizzBuzzer(input[0])
      }).to.throw(Error);
    });
  });
});

