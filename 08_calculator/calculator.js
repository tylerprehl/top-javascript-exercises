const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  return numbers.reduce((sum, curNum) => sum + curNum, 0);
};

const multiply = function(...numbers) {
  return numbers.reduce((product, curNum) => product * curNum, 1);
};

const power = function(num, power) {
	result = 1;
  for (let i=0; i<power; i++) {
    result = result*num;
  }
  return result;
};

const factorial = function(num) {
	let result = 1;
  for (let i=2; i<=num; i++) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
