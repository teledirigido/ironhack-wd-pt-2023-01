const student = {
  firstName: 'Ana'
};

/* Error 

student = 100;
student = {
  firstName: 'Andrew'
};
*/

/* OK 

student.firstName = 'Pedro';
*/

function sum(a,b) {
  if (a > b) {
    return a+b;
  }
  return console.error('Error');
}

let result = sum(2,5);
console.log(result);

