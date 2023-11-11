const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set("view engine", "hbs");

const globalVar = 'blue';

app.get('/', (request, response, next) => {
  
  const firstName = 'Andrew';

  response.render('index', { data: { firstName, globalVar }});

});

app.get('/about', (request, response, next) => {
  
  const data = {
    firstName: 'Miguel',
    lastName: 'Ironhack',
    age: 41,
    // descriptionHTML: '<i>I am</i> from <strong>Barcelona</strong>.',
    favColors: ['blue','red','green', 'black'],
    visitedCountries: [
      {
        name: 'Austria',
        capital: 'Viena'
      },
      {
        name: 'New Zealand',
        capital: 'Wellington'
      }
    ],
    tools: {
      foo: 'bar',
      anotherPropertie: 'blue',
      somethingElse: 'blablabla'
    },
    bgColor: '#8080FF'
  };

  if ( data.age > 40 ){
    data.over40 = true;
  } else {
    data.over40 = false;
  }

  data.firstColor = data.favColors[data.favColors.length - 1];

  response.render('about', data);
});

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
})