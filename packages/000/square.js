const cube = require('111').cube;

function square(x) {
  debugger
  const value = cube(x);
  return value * value;
}

module.exports = { square };
