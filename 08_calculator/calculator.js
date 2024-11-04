const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (myNums) {
  var sum = myNums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return sum;
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current);
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (num) {
  return factorialize(num);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
