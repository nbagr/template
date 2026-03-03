import sum from '../src/index.js'

test('check sum func', () => {
  expect(sum(1, 2)).toEqual(3)
  expect(sum(0, 0)).toEqual(0)
})
