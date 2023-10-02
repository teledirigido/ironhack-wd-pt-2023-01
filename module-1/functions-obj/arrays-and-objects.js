const classRoom = {
  teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
  students: [
    { firstName: 'Aliyah', lastName: 'Schulist', age: 18, favColors: ['blue', 'black'] },
    { firstName: 'Cleveland', lastName: 'Towne', age: 28, favColors: ['blue', 'red'] },
    { firstName: 'Jan', lastName: 'Quitzon', age: 18, favColors: ['black'] },
    { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18, favColors: [] },
    { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23, favColors: [] }
  ]
};

console.log(classRoom.students[3]);
// Show Alaina's age and lastname in a sentence
// console.log(`${classRoom.students[3].firstName} ${classRoom.students[3].lastName} is ${classRoom.students[3].age} years old`);

// es-6 syntax

classRoom.students.forEach( item => {
  // 1 iteration is : { firstName: 'Aliyah', lastName: 'Schulist', age: 18 }
  let favColors = '';
  item.favColors.forEach( itemColor => {
    favColors += itemColor + " ";
  });

  console.log(favColors);

  if ( item.age >= 20 ) {
    console.log(`${item.firstName} ${item.lastName} is ${item.age} years old. Fav colors: ${favColors}`);
  }


});

