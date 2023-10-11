const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
const bets = [
  { name: 'bet2', author: 'Michael', price: 50 },
  { name: 'bet3', author: 'Brad', price: 50 },
  { name: 'bet3', author: 'Andrew', price: 150 },
  { name: 'bet1', author: 'Carlos', price: 75 },
];

// copy the array on a new array
const copyBets = [...bets];

copyBets.sort( (a, b) => {
  //
  if (a.price > b.price ) {
    return 1;
  //
  } else if( a.price < b.price ) {
    return -1;
  //
  } else {
    if (a.author > b.author) {
      return 1;
    } else if (a.author < b.author) {
      return -1
    }
  }
  return 0;
});

console.log(bets);
console.log(copyBets);


numbers.sort( (a, b) => {
  return a - b;
});
// console.log(numbers);

// const numbers2 = [1,2,3,5,4]
// console.log(numbers2.reverse())

const words = ['Hello', 'Goodbye', 'AA', 'First', 'A', 'a', 'Second', 'b', 'Third'];
words.sort( (a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) return -1; //  1 here (instead of -1 for ASC)
  if (a.toLowerCase() > b.toLowerCase()) return 1; // -1 here (instead of  1 for ASC)
  if (a === 0) return 0;
});
// console.log(words);

let myString = 'AAA';
// Case 1
// console.log(myString);
// myString = myString.toLowerCase();
// console.log(myString);

// Case2
// console.log(myString);
// myString = myString[0].toLowerCase()
// console.log(myString);