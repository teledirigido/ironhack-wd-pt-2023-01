function func1(callback) {   // The `callback` parameter represents a function 
  console.log("Hi");
  
  callback();
}

function func2(callback) {  
  console.log("Goodbye!");
  callback();
}

function func3(){
  console.log('....');
}

func1( () => {
  func2( () => {
    func3( () => {

    });
  });
});
