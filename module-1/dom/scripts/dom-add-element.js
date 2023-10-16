const addMessage = document.querySelector('#add-message');
const submitMessage = (e) => {
  e.preventDefault();
  
  const inputText = document.querySelector('#message');
  const newLiItem = document.createElement('li');
  const list = document.querySelector('ul');

  newLiItem.innerHTML = inputText.value;
  list.appendChild(newLiItem);
  inputText.value = '';
}

/**
 * submitMessage es una funcion que se ejecuta al hacer click
 * en addMessage
 * 
 * addMessage es <a href="#" id="add-message">
 */
addMessage.addEventListener('click', submitMessage );