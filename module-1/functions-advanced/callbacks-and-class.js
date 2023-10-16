// const students = [
//   { name: "Alice", age: 28, address: "123 Main St" },
//   { name: "Bob", age: 35, address: "456 Oak Ave" },
//   { name: "Charlie", age: 22, address: "789 Pine Rd" }
// ];

class Student {
  constructor(name, age, booze) {
    this.name = name;
    this.age = age;
    this.booze = booze;
  }

  displayName(){
    console.log(this.name);
  }
  canDrink(callback) {
    if (this.age > 18) {
      console.log(`${this.name} can drink`);
      if (callback) {
        callback(this.name, this.booze);
      }
    } else {
      console.log('Sorry, you\'re not allow to drink');
    }
    
  }
}

const drinkingCallback = (name, drink) => {
  console.log(`${name} is enjoying a ${drink}`);
}
const pepe = new Student('Pepe', 20, 'Beer');
const laura = new Student('Laura', 23, 'Vodka');
const andres = new Student('Andres', 42, 'Water');

pepe.canDrink(drinkingCallback);
laura.canDrink(drinkingCallback);
andres.canDrink();