const myNumber = 1;
let anotherVar = 'Foo';

function doSomething(a) {
  const myNumber = 100;
  let anotherVar = 'Bar';
  return [myNumber, anotherVar];
}

console.log(myNumber);
console.log(doSomething(myNumber));