// routes/movie.routes.js

const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

const fileUploader = require('../config/cloudinary.config');

// GET route to display the form to create a new movie
router.get('/', (req,res) => {
  Movie.find()
    .then( moviesFromDB => {
      res.render('movie-views/movie-archive', { movies: moviesFromDB });
    });
});

router.get('/create', (req, res) => {
  
  res.render('movie-views/movie-create');

});

router.post('/create', fileUploader.single('movie-cover-image'), (req, res) => {
  const { title, description } = req.body;
  const newMovie = {
    title: title,
    description: description
  }

  if (req.hasOwnProperty('file') ) {
    newMovie.imageUrl = req.file.path;
  }

  Movie.create(newMovie)
    .then(newlyCreatedMovieFromDB => {
      // console.log(newlyCreatedMovieFromDB);
      res.redirect(`/movies/${newlyCreatedMovieFromDB._id}`)
    })
    .catch(error => console.log(`Error while creating a new movie: ${error}`));


});

router.get('/:id', (req, res) => {

  const { id } = req.params;

  Movie.findById(id)
    .then( movieFromDB => {
      res.render('movie-views/movie-single', movieFromDB );
    });


})


module.exports = router;
