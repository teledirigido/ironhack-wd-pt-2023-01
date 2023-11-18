// app.js
const express = require('express');
const app     = express();
const hbs     = require('hbs'); 

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/users/:username', (req, res) => {
  const { username } = req.params;
  res.send(username);
});

app.get('/news/:username/tags/:password', (req, res) => {
  // const { id } = req.params;
  res.send(req.params);
});

app.get('/search', (req, res) => {
  // valido: req.query.city, req.query['city']
  // req.query['favourite-foods'] no es lo mismo que req.query.favourite-foods
  // res.send({ 0: req.query['favourite-foods'], 1: req.query.city, 2: req.query['city'] })

  // res.send(req.query['start-date']);
  res.send(req.query)
})

// http://localhost:3000
app.get('/', (req, res) => {
  res.render('index')
});

app.listen(3000, () => console.log('App listening on port http://localhost:3000!'));
