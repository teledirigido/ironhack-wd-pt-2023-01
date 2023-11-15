// example.js
const mongoose = require('mongoose');
const Cat = require('./models/Cat.model');

Cat.create({
  name: 'Cuca',
  color: 'red'
}).then( newCat => {
  console.log(`New Cat created`, newCat );
}).catch( err => console.log(err) );


// Cat.findByIdAndUpdate('655509045235e3124ee95a04', { name: 'Bigotes', color: 'black' }, { new: true })
// .then( (thisCat) => {
//   console.log(thisCat);
// }).catch( err => console.log(err) );


// Connect to DB
mongoose
  .connect('mongodb://127.0.0.1:27017/examples')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));
