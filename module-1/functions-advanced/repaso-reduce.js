const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
const numbers2 = [22, 13, 109, 68, 12, 30, 9, 112, 223, 64, 18];

// Reduce

const reduceFn = (acc, currentValue) => {
  return acc + currentValue;
}

const getSum = (myArr) => {
  return myArr.reduce(reduceFn, 0);
}

const sumNumbers = getSum(numbers); 
console.log(sumNumbers);

const sumNumbers2 = getSum(numbers2);
console.log(sumNumbers2);