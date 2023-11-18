
/**
 * This is the ES5 way
 * 
 * you no longer need to learn this. use the 
 * spread operator instead <3
 * 
 **/ 

const reptiles = ['snake', 'lizard', 'alligator'];
const mammals = ['puppy', 'kitten', 'bunny'];

const animals = mammals.concat(reptiles);

animals.push('fish');

console.log(animals);
console.log(mammals);
console.log(reptiles);