const inputButton = document.querySelector('#get-country-btn');

inputButton.addEventListener('click', function(event){

  event.preventDefault();
  const inputCountry = document.querySelector('#country-name-input');
  
  // Method 2
  axios.get(`https://restcountries.com/v2/name/${inputCountry.value}`)
    .then( (response) => {
      renderData(response.data);
  })

});

function renderData(data) {
  const countryName = document.querySelector('#country-name');
  const capitalName = document.querySelector('#country-capital');
  const countryFlag = document.querySelector('#country-flag');

  countryName.innerHTML = data[0].name;
  capitalName.innerHTML = data[0].capital;
  countryFlag.setAttribute('src', data[0].flag);

}
