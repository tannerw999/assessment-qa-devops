const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
        test('should return an array', () => {
          let shuffleArray = arrCopy()
          expect(typeof shuffleArray).toEqual([])
    })
})

describe('shuffleArray length', () => {
    test('shoud return the same length', () => {
        expect(shuffleArray).toBe(shuffleArray.length)
    })
})