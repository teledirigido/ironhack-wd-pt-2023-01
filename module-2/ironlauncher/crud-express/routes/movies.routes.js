const router = require("express").Router();
const Movie = require('../models/Movie.model');

// movies/new
router.post("/new", (req, res, next) => {

  const { title, duration, genre } = req.body;

  Movie.create({ title, duration, genre })
    .then( (response) => {
      res.json(response);
    }).catch( err => { 
      res.json(err);
    });

});

// movies/:id
router.get('/:id', (req, res, next) => {

  const { id } = req.params;

  Movie.findById(id)
    .then( movieFromDB => {
      res.json(movieFromDB);
    });

});

// movies/:id
router.post('/:id/edit', (req, res, next) => {

  const { id } = req.params;
  const { title, duration, genre } = req.body;

  Movie.findByIdAndUpdate(id, { title, duration, genre }, { new: true })
    .then( movieFromDB => {
      res.json(movieFromDB);
    });

});

router.get('/:id/delete', (req, res, next) => {

  const { id } = req.params;

  Movie.findByIdAndDelete(id)
    .then( () => {
      res.json(`Movie ${id} has been deleted`);
    });

});


module.exports = router;
