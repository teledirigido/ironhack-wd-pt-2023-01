const data = "pizza, sushi, empanadas, arepas";
const dataArr = data.split(', ');

const newArray = [];

function wordToUppercase(word) {
  return word[0].toUpperCase() + word.slice(1)
}

dataArr.forEach( (food) => {
  newArray.push(wordToUppercase(food));
});

const anotherArray = dataArr.map( food => {
  return wordToUppercase(food);
});

// console.log(newArray);
console.log(anotherArray);

