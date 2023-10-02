const students = ['Marcel', 'Gabri', 'Jose','Maksim','Eric'];
const vowels = ['a','e','i','o','u','l'];
let namesStartingWithM = [];
let namesEndingWithVowels = [];

/*
1. Iterar el array
2. Check if the first characters starts with m
3. If starts with m, push it to nameStartingWithM
4. console.log(namesStartingWithM
*/

students.forEach( function(item, index) {
  // item === students[index]
  // console.log(item, students[index]);
  if( item[0]==='M') {
    namesStartingWithM.push(item);
  }

  /*
  if (item[item.length - 1] === 'a' || item[item.length - 1] === 'e' || item[item.length - 1] === 'i' || item[item.length - 1] === 'o' || item[item.length - 1] === 'u') {
    namesEndingWithVowels.push(item);
  }
  */
 
 // item[item.length - 1] is inside vowels
//  if (vowels.includes(item[item.length - 1])) {
 if (vowels.includes(item[item.length - 1])) {
    namesEndingWithVowels.push(item);
  }


});

console.log(namesEndingWithVowels);
// console.log(namesStartingWithM);