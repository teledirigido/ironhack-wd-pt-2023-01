const myFirstPromise = function() {
  return new Promise( (resolve, reject) => {
    let username = 'admin';
    console.log('Hello world');
    
    if ( username === 'admin') {
      resolve();
    } else {
      reject();
    }
    
  });
}
myFirstPromise();
