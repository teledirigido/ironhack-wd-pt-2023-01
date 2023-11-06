const pr9 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Ironhack"), 1000);
});


pr9
  .then(() => console.log("1. then()") )
  .then(() => Promise.reject("Oops!") )       // <= Reject a Promise
  .then(() => console.log("3. then()") )       // <= This block is skipped
  .catch((err) => {
    console.log("catch()", err) 
  })
  .finally(() => console.log("finally()"));
