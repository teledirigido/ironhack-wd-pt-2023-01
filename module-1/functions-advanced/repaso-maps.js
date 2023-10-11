const numbers = [1,2,3,4,5,6];

const result = numbers.map( n => {
  if ( n % 2 === 0) {
    return n*100;
  }
  return n;
})
// console.log(result);

const onlyEven = numbers.filter( n => {
    return n % 2 === 0;
});
console.log(onlyEven);