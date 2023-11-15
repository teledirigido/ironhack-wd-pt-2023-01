// Initialize express
const express = require("express");
const app = express();

// Initialize mongoose
const mongoose = require('mongoose');

// Import ./data.json into our data varable
const data = require('./data');

// import our model Product
const Product = require('./models/Product.model');

// Connect to Mongoose
mongoose
  .connect('mongodb://127.0.0.1:27017/eCommerceExample')
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    return Product.deleteMany();
  }).then( () => {
    // Create documents based on "data" into Product Model (collection products)
    Product.create(data).then( (data) => { console.log('Data imported', data) });
  })
  .catch(err => console.error('Error connecting to mongo', err));


// Server
app.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});