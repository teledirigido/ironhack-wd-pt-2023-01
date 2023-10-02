const bob   = { name: "Bob", age: 17 };
const susy  = { name: "Susy", age: 18 };
const ted   = { name: "Ted", age: 18 };
const sarah = { name: "Sarah", age: 20 };
const bill  = { name: "Bill", age: 19 };

const students = [
  { name: "Bob", age: 17 },
  { name: "Susy", age: 18 },
  { name: "Ted", age: 18 },
  { name: "Sarah", age: 20 },
  { name: "Bill", age: 19 }
];

// Get the value of the first student’s name
let oldestAge = 0;
let studentName = '';

students.forEach(function(item){
  if (item.age > oldestAge) {
    oldestAge = item.age;
    studentName = item.name;
  }
});
console.log(studentName);

// Get the age of the student named Sarah

const twoD = [
  ["Bob", "Susy", "Ted"],
  ["Lilly", "Sarah", "Bill"],
  ["Thomas", "Barry", "Alex"]
];

console.log(twoD[3])