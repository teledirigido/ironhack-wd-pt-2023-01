const myBooks = [
  {
    name: 'El Principito',
    price: 100
  },
  {
    name: 'La casa de los espiritus',
    price: 200
  },
  {
    name: 'The hidden life of trees',
    price: 75
  }
];

// console.log(myBooks[0].name) // El Principito
// console.log(myBooks[1].name) // La casa de los espiritus
// console.log(myBooks[2].name) // The hidden life of strees


let counter = 0;
const callbackFunction = function () {
  
  console.log(myBooks[counter].name);

  // setTimeout calls itself out and is stored in timeoutID
  timeoutId = setTimeout(callbackFunction, 1000);
 
  counter += 1;
 
  if (counter > myBooks.length - 1) {
    // uses timeoutId
    clearTimeout(timeoutId);
  }
};
 
callbackFunction();

