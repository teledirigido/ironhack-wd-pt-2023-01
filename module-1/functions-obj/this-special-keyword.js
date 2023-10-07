// console.log(this);

/* Array and forEach
*/

const arr = [1,2,3,4,5];
arr.forEach( (item, index) => {
  // console.log(item)
});

/* Objects
*/
const student = {
  name: 'Pepe',
  lastname: 'Gonzales',
  city: 'Bilbao',
  sayHi() {
    console.log(`Hola, mi nombre es ${this.name} ${this.lastname}. Soy de ${this.city}.`);
  }
}
// student.sayHi();

class Campus {
  
  constructor(location, courses) {
    this.location = location;
    this.courses = courses;

    this.showDescription();
    this.doSomething();
  }

  doSomething() {
    console.log('Doing something');
  }

  showDescription() {

    // Good ✅
    // This forEach keeps the variable `this` in the context of the object Campus
    this.courses.forEach( (item) => {
      console.log(item);
    });

    // PELIGRO ⚠️
    // This forEach DOES NOT keep the variable `this` in the context of the object Campus
    //
    // this.courses.forEach( function(item) {
    //   console.log(this.location);
    // });

    // console.log(this);
  }

}

const campusBarcelona = new Campus('Barcelona', ['web-dev','ux-ui','data-science']);

/*
web-dev
ux-ui
data-science
*/
// console.log(campusBarcelona);
// campusBarcelona.showDescription();