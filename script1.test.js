// This 'imports' the add function from your script.js
const add = require('./script1.js');

// This is the actual test
test('Check if 1 + 2 equals 3', () => {
  expect(add(1, 2)).toBe(3);
});