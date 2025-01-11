const assert = require('assert')
const fizzbuzz = require('../index')

describe('fizzbuzz', () => {
    it ('returns FizzBuzz when value is devided by 15', () => {
        assert(fizzbuzz(30) === 'FizzBuzz')
    })

    it ('return Fizz when value is devided by 3', () => {
        assert(fizzbuzz(6) === 'Fizz')
    })

    it ('return Buzz when value is devided by 5', () => {
        assert(fizzbuzz(10) === 'Buzz')
    })

    it ('returns the value when value is not devided by 3 or 5', () => {
        assert(fizzbuzz(7) === '7')
    })
})