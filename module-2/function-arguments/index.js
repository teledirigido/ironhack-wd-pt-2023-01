function sum(...x) {
  console.log(x.reduce( (acc, curr) => acc + curr, 0))
  console.log(arguments);
}

sum(1,2,3,4,20,200,200,'asd');

function doSomething() {
  console.log(arguments[0]);
}

// doSomething('yellow', 'blue', 'black');

