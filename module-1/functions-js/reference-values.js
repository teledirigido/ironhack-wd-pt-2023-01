// Primitive values
let student = 'Ana';
student = 'Juana';
let teacher = student;
// console.log(student === teacher);

function myFunction() {
  return 'Eric';
}

let students = ['jose', 'ricardo', 'andrea'];
let teachers = [...students, myFunction()];
// teachers.push('eric');
console.log(students);
console.log(teachers);
// console.log(students === teachers);
// console.log(students.length === teachers.length);

function areArraysEquals(arr1, arr2) {
  
  if (arr1.length !== arr2.length) {
    return false;
  }

  const sizeArray = arr1.length;
  let isEqual = true;
  for( let i = 0 ; i < sizeArray ; i++) {
    if (arr1[i] !== arr2[i]) {
      isEqual = false;
    }
  }
  return isEqual;
}

const equalArrays = areArraysEquals(students, teachers);
// console.log(equalArrays);


const book1 = {
  name: 'El Principito',
  isAvailable: true,
  likes: ['juana', 'andrea', 'pepe']
}

function changeOfStock(book) {
  // const myBook = Object.assign( {}, book); // Shallow copy
  const myBook = JSON.parse(JSON.stringify(book)); // Deep copy
  myBook.isAvailable = false;
  myBook.likes.push('maksim');
}

// changeOfStock(book1);