/*

const tag = document.querySelector('h1'); // <h1>
const tagClass = document.querySelector('.h1'); // <div class="h1">
const tagID = document.querySelector('#third'); // <div id="third">

*/

const subHeading2 = document.getElementById('third');
console.log(subHeading2.getAttribute('data-name'));
subHeading2.setAttribute('data-name', 'foo');
subHeading2.setAttribute('data-foo', 'bar');

const allSubHeadings = document.querySelectorAll('.heading');
allSubHeadings.forEach( item => {
  if ( item.getAttribute('id') === 'third') {
    item.classList.add('red');
    // console.log(item);
  }
})

const elementsByClassName = document.getElementsByClassName('heading');
// [...elementsByClassName].forEach( item => {
//   console.log(item);
// })

const changeText = () => {
  const fontHeading = document.querySelector('h1');
  console.log(fontHeading);
  fontHeading.style.fontSize = '48px'; // font-size: 60px;
  setTimeout( () => {
    fontHeading.style.transition = 'ease font-size 600ms';
    fontHeading.style.fontSize = '60px'; // font-size: 60px;
    fontHeading.classList.add('red');
  }, 1000);
  
  setTimeout( () => {
    fontHeading.classList.remove('red');
  }, 2000);
}


const submitButton = document.querySelector('.submit')
const onClick = () => {
  changeText();
}
submitButton.addEventListener('click', onClick )

const submit2 = document.querySelector('.submit-remove');
submit2.addEventListener('click', () => {
  document.querySelector('#third').classList.toggle('red');
})