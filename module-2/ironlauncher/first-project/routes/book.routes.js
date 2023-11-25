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

router.get('/:id', (req, res) => {

  Book.findById(req.params.id).then( dataFromDB => {
        
    res.render('books/book-details.hbs', { data: dataFromDB, updated: req.query.updated })

  });

});

router.get('/:id/edit', (req, res) => {

  const { id } = req.params;

  Book.findById(id)
    .then( bookFromDB => {
      res.render('books/book-edit', bookFromDB);
    })
});

router.post('/edit', (req, res) => {
  const { title, description, author, rating } = req.body;

  Book.findByIdAndUpdate(req.body.id, { title, description, author, rating })
    .then( () => {
      res.redirect(`/books/${req.body.id}?updated=true`)
  })

});

router.get('/:id/delete', (req, res, next) => {

  const { id } = req.params;

  Book.findByIdAndDelete(id)
    .then( () => {
      res.redirect('/books')
    }).catch( err => next(error) );
});

router.post('/:id/delete', (req, res, next) => {

  const { id } = req.params;

  Book.findByIdAndDelete(id)
    .then( () => {
      res.redirect('/books')
    }).catch( err => next(error) );
});


module.exports = router;
