const getReady = (callback, day) => {
  let anotherVar = 100;
  console.log(`Today is ${day}. I am getting ready`);
  callback(day, anotherVar);
}

const iAmReady = (day, anotherVar) => {
  console.log(anotherVar);
  if ( day === 'Monday') {
    console.log('I am ready for work');
  }
  
  if ( day === 'Saturday') {
    console.log('I am ready for party');
  }

}

getReady( iAmReady, 'Monday');
// getReady( iAmReady, 'Saturday');

