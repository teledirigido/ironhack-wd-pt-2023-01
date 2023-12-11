// routes/movie-characters.routes.js

const router = require("express").Router();

const ApiService = require('../services/api.service');
const apiService = new ApiService();

// List all the characters from the API.
router.get('/movie-characters/list', (req, res) => {
  
  apiService.getAllCharacters().then( response => {
    // res.json(response.data);
    res.render('pages/characters-list', { characters: response.data })
  })

  // res.send(`Here we'll render the characters list`);

});

// Render a form to create a new character.
router.get('/movie-characters/create', (req, res) => {
  // res.send(`Here we'll render the form to create a new characters`);
  res.render('pages/new-character-form');
});

// Submit info to create a new character.
router.post('/movie-characters/create', (req, res) => {
  // res.send(`Here we'll send the form to create a new characters`);
  const characterInfo = req.body;

  apiService
    .createCharacter(characterInfo)
    .then((response) => {
      // res.json(response.data);
      res.redirect('/movie-characters/list'); // <== leave this line commented for now
    })
    .catch((error) => console.log(error));

});

// Render a form to edit a character.
router.get('/movie-characters/edit/:id', (req, res) => {

  const { id } = req.params;
  apiService.getOneCharacter(id).then( response => {
    res.render('pages/edit-character-form', { character: response.data })
  })

  // res.send(`Here we'll render the form to update character with ID ${req.params.id}`);
});

// Submit info to edit a character with a matching id.
router.post('/movie-characters/edit/:characterId', (req, res) => {
  // res.send(`Here we'll send the form to update character with ID ${req.params.id}`);
  const { characterId } = req.params;
  const characterInfo = req.body;
  
  apiService
    .editCharacter(characterId, characterInfo)
    .then((response) => {
      // res.json(response.data);
      res.redirect('/movie-characters/list'); // <== leave this line commented for now
    })
    .catch((error) => console.log(error));

});

// Delete a character with a matching id.
router.get('/movie-characters/delete/:characterId', (req, res) => {
  // res.send(`Here we'll delete character with ID ${req.params.id}`);
  const { characterId } = req.params;
 
  apiService
    .deleteCharacter(characterId)
    .then((response) => {
      //  res.json(response.data);
      res.redirect(`/movie-characters/list`); // <== leave this line commented for now
    })
    .catch(error => console.log(error));
});

module.exports = router;
