const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.sendFile( __dirname + '/views/cats.html')
});

app.get('/dogs', (request, response, next) => {
  const data = ['bobby', 'max', 'firulais'];
  console.log('This is JS executed in Node', data);
  response.sendFile( __dirname + '/views/dogs.html')
});

app.listen(3000, () => console.log('My first app listening on port 3000! http://localhost:3000 '));