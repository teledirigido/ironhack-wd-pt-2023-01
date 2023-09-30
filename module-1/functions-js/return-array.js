function nameOrigin(name) {

  if (name === 'peter') {
    return {
      origin: 'UK',
      continent: 'europe',
      type: 'male'
    }
  } else if (name === 'yin'){
    return {
      origin: 'CN',
      continent: 'asia',
      type: 'female'
    }
  }

}

function getNumbers(limit) {
  let mySecuence = [];

  for(let i = 1 ; i <= limit ; i++) {
    if (i % 2 === 0) {
      mySecuence.push(i);
    }
  }

  return mySecuence;

}

const myNumber = getNumbers(10);
console.log(myNumber);

// const nameData = nameOrigin('yin');
// console.log(nameData);


var arrayNames = ["Pedro", "Jake", "Joan"];

console.log(arrayNames);
arrayNames.shift()
console.log(arrayNames);
arrayNames.push("Juan");
console.log(arrayNames);

/**
 * In this case we can pass a function as an argument
 */
const fruits = ['peras','manzanas','kiwis', 'albaricoque'];
let longestElement = 0;
let longestFruitName = '';
fruits.forEach( function(item) {
  if (item.length > longestElement ) {
    longestElement = item.length; // 8
    longestFruitName = item; // manzanas
  }
});
console.log(longestFruitName);

// for( let i = 0 ; i < fruits.length ; i++) {
//   console.log(`Fruta ${i}: ${fruits[i]}`);
// }
