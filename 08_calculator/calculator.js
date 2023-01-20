const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let num = 0;

  for(i = 0; i < array.length; i++){
    num += array[i]
  }

  if(array === ''){
    return 0;
  }

  return num;
};

const multiply = function(array) {
	let num = 1;

  for(i = 0; i < array.length; i++){
    num = array[i] * num;
  }

  if(array === ''){
    return 0;
  }

  return num;
};

const power = function(num1, num2) {
  let result = 1;

  for(i = 0; i < num2; i++){
    result = result * num1;
  }

  return result;
};

const factorial = function(num) {
	let result = 1;
  let decrNum = num;

  for(i = 0; i < num; i++){
    result = result * decrNum;
    decrNum--;
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
