const startProgram = function() {
  console.log('Starting my program');
}

const finishingProgram = function() {
  console.log('Finishing my program');
}

const sayHello = function() {
  console.log('Hello everyone');
  setTimeout(finishingProgram, 500);
};

startProgram();

setTimeout( sayHello, 1000);
