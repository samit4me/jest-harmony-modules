// const cube = require('111').cube;

function square(x, styles) {
  // debugger
  // const value = cube(x);

  if (!x) {
    return 'default';
  }

  // console.log(styles.test, styles[test]);
  const found = styles[x];
  const valid = typeof found === 'string';
  console.log(styles, valid);
  if (!valid) {
    return 'invalid';
  }
  if (!found) {
    return 'undefined';
  }
  return found;
  // return x * x;
}

module.exports = { square };
