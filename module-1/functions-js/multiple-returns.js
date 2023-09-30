function sayHi(name) {

  if (!name) {
    return console.log('You must type a name'); 
  } else {
    console.log(`Hi ${name}`);
  }  

  console.log('Do this task');
  console.log('Do this other task');

}

sayHi('Miguel');

