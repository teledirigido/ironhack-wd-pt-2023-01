

function sayHi(name, language) {
  
  let languageExist = false;

  switch(language) {
    case 'spanish':
      console.log(`Hola ${name}. Que tal todo?`);
      languageExist = !languageExist;
      break;
    case 'italian':
      console.log(`Ciao ${name}. Tutto bene?`);
      languageExist = !languageExist;
      break;
    default:
    console.log(`Hi ${name}. How are you doing?`);
  }

  return languageExist;

}

const studentName = 'Marcel';
let greeting = sayHi(studentName, 'spanish');

if ( greeting ) {
  console.log('The language exists!');
}
