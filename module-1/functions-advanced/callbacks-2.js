function sayHi(i, index) {
  console.log(`[${index}] Hello world ${i}`);
}

const showMessage = () => {
  console.log('Message goes here');
}
const myNumber = 20;

const numbers = [1,2,3,4,100];
numbers.forEach(sayHi);

numbers.forEach( () => {
  console.log('Message goes here');
})