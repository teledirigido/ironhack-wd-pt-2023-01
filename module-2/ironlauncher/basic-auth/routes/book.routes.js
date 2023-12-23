const express = require('express');
const router = express.Router();
const Book = require("../models/Book.model");
const User = require("../models/User.model");

router.get("/", (req, res, next) => {
  Book.find()
    .then( allBooks => {
      res.render('books/list', { allBooks })
    });
});

/* GET /books/new porque hay un prefijo añadido en el app.js */
router.get("/new", (req, res, next) => {
  res.render("books/new");
});

router.post('/new', (req, res) => {

  /* 

  Metodo 1 / forma antigua:

  const newBookData = {
    title: req.body.title,
    description: req.body.description,
    author: req.session.currentUser
  }

  Metodo 2 
  */
 const { title, description } = req.body;
 const { _id } = req.session.currentUser;


  // Creamos el libro
  Book.create({ title, description, author: _id })
    // El libro resuelve la promesa con el documento de MongoDB
    .then( newBook => {
      // Asociar el libro al usuario
      User.findByIdAndUpdate(_id, { $push: { books: newBook._id } }, { new: true })
        .then( () => {
          res.redirect('/');
        })
  });

});

router.get("/:bookId", (req, res, next) => {

  let canEdit = false;
  const { bookId } = req.params;

  Book.findById(bookId)
    .populate('author')
    .then( bookFromDB => {

      
      if ( req.session.currentUser._id === bookFromDB.author._id.toString() ) {
        canEdit = true;
      }

      res.render('books/details', { bookFromDB, canEdit });
    });
  
});

router.get('/:bookId/edit', (req, res, next) => {
  
  const { bookId } = req.params;

  Book.findById(bookId)
    .then( bookFromDB => {

      // Revisar que el current user id sea igual al id del autor del libro
      // utilizamos toString() porque el id del autor retorna un objeto
      if ( req.session.currentUser._id !== bookFromDB.author.toString() ) {
        res.redirect('/books')
      } else {
        res.send('Editing the book');
      }
    });

});

module.exports = router;
 