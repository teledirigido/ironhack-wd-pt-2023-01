const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");
const mongoose = require('mongoose');

// HBS engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const City = mongoose.model('City', { 
  name: String 
});

app.get('/new-city', (req, res,next) => {
  const newCity = new City({ name: 'Tortosa' });
  newCity
    .save()
    .then(newCity => console.log(`A new city is created: ${newCity}!`))
    .catch(err => console.log(`Error while creating a new cat: ${err}`));
});

app.get('/all-cities', (req, res, next) => {
  City.find().then(allCities => {
    res.render('all-cities', { allCities });
  })
})

// http://localhost:3000/
app.get("/", (req, res, next) => {
  
  const cities = ['Barcelona', 'Tortosa', 'Girona'];

  res.render("index", { cities });

});

// Connect to Mongoose
mongoose
  .connect('mongodb://127.0.0.1:27017/WorldMap')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


// Server
app.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});