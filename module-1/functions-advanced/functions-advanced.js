const plantas = ['menta','romero','toronjil','oregano'];

// FOR EACH

// 1- Define a new array
let plantasUppercase = []; // ['MENTA','ROMERO' .... ]

// 2- Iterate the source array 
plantasUppercase = plantas.forEach( item => {
  // 3- Add onto the new array, the element modified
  return plantasUppercase.push(item.toUpperCase());
});

// 4- OPTIONAL print in screen
// console.log(plantasUppercase);

const misPlantas = plantas.map( (item) => {
  return item.toUpperCase();
});

// console.log(plantas);
// console.log(misPlantas);

const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];
const capitalCities = cities.map( city => {
  city.charAt(0).toUpperCase() + city.slice(1);
});
// console.log(capitalCities);

const students = [
  {
    name: 'Tony Parker',
    firstProject: 80,
    secondProject: 75,
    finalExam: 90
  },
  {
    name: 'Marc Barchini',
    firstProject: 84,
    secondProject: 65,
    finalExam: 65
  },
  {
    name: 'Claudia Lopez',
    firstProject: 45,
    secondProject: 95,
    finalExam: 99
  },
  {
    name: 'Alvaro Briattore',
    firstProject: 82,
    secondProject: 92,
    finalExam: 70
  },
  {
    name: 'Isabel Ortega',
    firstProject: 90,
    secondProject: 32,
    finalExam: 85
  },
  {
    name: 'Francisco Martinez',
    firstProject: 90,
    secondProject: 55,
    finalExam: 78
  },
  {
    name: 'Jorge Carrillo',
    firstProject: 83,
    secondProject: 77,
    finalExam: 90
  },
  {
    name: 'Miguel López',
    firstProject: 80,
    secondProject: 75,
    finalExam: 75
  },
  {
    name: 'Carolina Perez',
    firstProject: 85,
    secondProject: 72,
    finalExam: 67
  },
  {
    name: 'Ruben Pardo',
    firstProject: 89,
    secondProject: 72,
    finalExam: 65
  }
];

const studentsFinal = students.map( student => {
  const partials = ( ( student.firstProject + student.secondProject) / 2 ) * 0.40;
  const finalExam = student.finalExam * 0.60;
  return {
    name: student.name,
    finalGrade: Math.ceil(finalExam + partials)
  }
});
// console.log(studentsFinal);

const numbers = [2, 4, 6, 8];
let sumTotal = 100;

numbers.forEach(n => {
  sumTotal += n;
});

sumTotal = numbers.reduce( (acc, currentValue) => {
  return acc + currentValue;
}, 100);
// console.log(sumTotal);


const people = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 49 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 17 }
];

let sumPeople = people.reduce( (acc, currentValue) => {
  // console.log(currentValue);
  return acc + currentValue.age;
}) 

// console.log(sumPeople / people.length );

const menu = [
  { name: 'Carrots', calories: 150 },
  { name: 'Steak', calories: 350 },
  { name: 'Broccoli', calories: 120 },
  { name: 'Chicken', calories: 250 },
  { name: 'Pizza', calories: 520 }
];

const aveCalories = menu.reduce( (acc, currentValue) => {
  return acc + currentValue.calories;
}, 0) / menu.length;
// console.log(aveCalories);

const product = {
  name: 'AmazonBasics Apple Certified Lightning to USB Cable',
  price: 7.99,
  manufacturer: 'Amazon',
  reviews: [
    { user: 'Pavel Nedved', comments: 'It was really useful, strongly recommended', rate: 4 },
    { user: 'Alvaro Trezeguet', comments: 'It lasted 2 days', rate: 1 },
    { user: 'David Recoba', comments: 'Awesome', rate: 5 },
    { user: 'Jose Romero', comments: 'Good value for money', rate: 4 },
    { user: 'Antonio Cano', comments: 'It broked really fast', rate: 2 }
  ]
};

const averageProductReview = product.reviews.reduce( (acc, currentValue) => {
  return acc + currentValue.rate;
}, 0) / product.reviews.length;
// console.log(averageProductReview);

const bestRates = product.reviews.filter ( item => {
  return item.rate >= 5;
});
// console.log(bestRates);

const misNumeros = [1, 2, 3, 4, 5, 6];
const evenNumbers = misNumeros.filter( number => {
  return number % 2 === 0;
});
// console.log(evenNumbers);

const peopleInTheBar = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 20 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 17 },
  { name: 'Bill', age: 19 }
];
const peopleAllowToDrink = peopleInTheBar.filter( (people) => {
  return people.age >= 18;
});
console.log(peopleAllowToDrink);


const places = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: 'Private Room',
    pool: true,
    garage: false
  },
  {
    title: 'Private apartment',
    price: 190,
    type: 'Entire Place',
    pool: true,
    garage: true
  },
  {
    title: 'Apartment with awesome views',
    price: 400,
    type: 'Entire Place',
    pool: false,
    garage: false
  },
  {
    title: 'Apartment in la Rambla',
    price: 150,
    type: 'Private Room',
    pool: false,
    garage: true
  },
  {
    title: 'Comfortable place in Barcelona´s center',
    price: 390,
    type: 'Entire place',
    pool: true,
    garage: true
  },
  {
    title: 'Room near Sagrada Familia',
    price: 170,
    type: 'Private Room',
    pool: false,
    garage: false
  },
  {
    title: 'Great house next to Camp Nou',
    price: 140,
    type: 'Entire place',
    pool: true,
    garage: true
  },
  {
    title: 'New apartment with 2 beds',
    price: 2000,
    type: 'Entire place',
    pool: false,
    garage: true
  },
  {
    title: 'Awesome Suite',
    price: 230,
    type: 'Private Room',
    pool: false,
    garage: false
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: 'Entire place',
    pool: true,
    garage: true
  }
];
const placeWithPool = places.filter( item => {
  return item.pool;
});
console.log(placeWithPool);

const anotherList = [1, 60, 112, 123, 100, 99, 73, 45];
const checkEven = (item) => {
  return item % 2 === 0;
}
const oddNumbers = anotherList.filter(checkEven);
console.log(oddNumbers);


function toCapitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
let myWord = toCapitalize('asdoidqwjioqdwiojhqdwoij');
console.log(myWord);
