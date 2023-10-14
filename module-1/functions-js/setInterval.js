const startProgram = function() {
  console.log('Starting my program');
}
let i = 10;
const sayHi = function() {
  console.log(`Count: ${i}`);
  i--;
  if ( i === -1) {
    clearInterval(myInterval); 
    console.log('You reached the end :)');
  }
}

startProgram();
const myInterval = setInterval(sayHi, 500);

