/*

Create a class Rectangle with:

    A property width
    A property height
    A method constructor(width,height)
    A method calculatePerimeter()
    A method calculateArea()

Create a class Square that extends Rectangle add with:

    A property side (equals to the width and height)
    A method constructor(side)
*/

class Rectangle {
  
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }

  calculateArea() {
    return this.width * this.height;
  }

}

class Square extends Rectangle {
  // TODO
  constructor(side) {
    super(side, side); // this function calls the parent class
  }
}

const r1 = new Rectangle(6, 7);
console.log('Perimeter of r1 =', r1.calculatePerimeter()); // 26
console.log('Area of r1 =', r1.calculateArea()); // 42

const s1 = new Square(5);
console.log('Perimeter of s1 =', s1.calculatePerimeter()); // 20
console.log('Area of s1 =', s1.calculateArea()); // 25

const s2 = new Square(10);
console.log('Perimeter of s2 =', s2.calculatePerimeter()); // 40
console.log('Area of s2 =', s2.calculateArea()); // 100
