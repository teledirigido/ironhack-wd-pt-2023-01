const person = {
  name: 'Ironhacker',
  age: 25,
  favoriteMusic: 'Metal',
  number: 32,
  address: {
    street: 'Super Cool St',
    number: 123,
    city: 'Miami',
  },
};

let {
  name,
  age,
  favoriteMusic,
  address
} = person;

console.log(`${name} lives in ${address.street}`);
// ==> Ironhacker lives in 123 Super Cool St, city of Miami.
