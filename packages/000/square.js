// const cube = require('111').cube;

function square(x, styles) {
  // debugger
  // const value = cube(x);

  const test = 'wtf';
  // console.log(styles.test, styles[test]);
  const found = styles[x];
  console.log(styles, typeof found);
  return found;
  // return x * x;
}

module.exports = { square };
