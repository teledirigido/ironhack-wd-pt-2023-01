const myNumber = 10;

function printTwoDigits(n) {
  // Code here
  if (n < 10) {
    return `0${n}`;
  } else {
    return n;
  }
}

const twoDigits = printTwoDigits(myNumber);
console.log(twoDigits);