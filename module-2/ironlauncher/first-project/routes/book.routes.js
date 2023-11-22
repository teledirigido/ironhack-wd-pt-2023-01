// routes/book.routes.js
const router = require('express').Router();
const Book = require('../models/Book.model.js');

// GET route to retrieve and display all the books
router.get('/', (req, res) => {

  Book.find().then( data => {
    res.render('books/book-list.hbs', { books: data });
  })

});


router.get('/create', (req, res ) => {
  res.render('books/book-create.hbs');
});

router.post('/create', (req, res) => {
  Book.create(req.body).then( (data) => {
    console.log(`The book ${data.title} has been created`)
    res.redirect('/books');
  });
});


router.get('/:id', (req,res) => {

  Book.findById(req.params.id).then( dataFromDB => {
    res.render('books/book-details.hbs', dataFromDB )
  })

});


module.exports = router;
