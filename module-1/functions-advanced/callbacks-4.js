const finishTheWork = () => {
  console.log('The work is done');
}

// Display on screen if workType is not defined
let topic = 'Math';
const doHomeWork = (workType, callback) => {
  if (!workType) {
    console.log('Doing general stuff');
  } else {
    console.log(`Doing some stuff on ${workType}...`);
  }
  if (callback) {
    callback();
  }
}

doHomeWork('Math', finishTheWork);