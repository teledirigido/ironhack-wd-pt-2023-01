const info = true;

const mainDiv = document.querySelector('#main');
const myLink = document.createElement('a');
myLink.setAttribute('href', 'http://ironhack.com');
myLink.innerHTML = 'Go to Ironhack Website';
const myLink2 = '<a href="http://ironhack.com">Go to Ironhack Website</a>'

if (info) {
  myLink.classList.add('success');
} else {
  myLink.classList.add('warning');
}

mainDiv.innerHTML += myLink2;
mainDiv.innerHTML += '<p>Hello <strong>World</strong></p>';
// console.log(mainDiv);