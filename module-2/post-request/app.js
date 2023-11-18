// app.js
const express = require('express');
const app     = express();
const hbs     = require('hbs'); 
const bodyParser = require('body-parser'); // important if you want to use POST Method

// 2. let know your app you will be using it
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

function myFirstMiddleware(req,res, next) {
  console.log('Hello world');
  req.secretValue = 'tiger';
  next();
}

app.get('/', myFirstMiddleware, (req, res) => {
  console.log(req.secretValue);
  res.render('index');
});

app.post('/signup', (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => console.log('App listening on port http://localhost:3000!'));