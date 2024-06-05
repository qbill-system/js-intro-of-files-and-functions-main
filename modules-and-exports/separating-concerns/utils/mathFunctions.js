function addNumbers(num1, num2) {
  return num1 + num2;
}
function multiplyNumbers(num1, num2) {
  return num1 * num2;
}
function squareNumber(num) {
  return num ** 2;
}
function divideNumbers(num1, num2) {
  return num1 / num2;
}

function isEven(num) {
  return num % 2 === 0;
}

function getSquareRoot(num) {
  return Math.sqrt(num);
}

//module.exports = [addNumbers, multiplyNumbers, squareNumber, divideNumbers, isEven, getSquareRoot]
module.exports = {f1: addNumbers, f2: multiplyNumbers, f3: squareNumber, f4: divideNumbers, f5: isEven, f6: getSquareRoot}