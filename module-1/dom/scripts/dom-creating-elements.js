const h1 = document.createElement('h1');
let body = document.body;
let parent = document.querySelector('#main-div.bg-green'); // <div id="main-div" class="bg-green"> <div>
// let parent = document.querySelector('body');

console.log(parent);
h1.innerHTML = 'My custom and dynamic h1';
// h1.classList.add('white');
body.insertBefore(h1, parent);