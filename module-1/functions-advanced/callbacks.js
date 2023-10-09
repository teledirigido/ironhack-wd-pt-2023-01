function wakeUp(myVar1, myVar2, myVar3) {
  console.log(myVar3);
  console.log('I am waking up');
}

function takeShower() {
  console.log('I go to take a shower');
}

function goToWork(callback1, callback2) {
  let day = 'monday'
  console.log('Today is a working day');

  callback1(day, 'hi');
  callback2();
  console.log('I am ready for work');
}

goToWork(wakeUp, takeShower);