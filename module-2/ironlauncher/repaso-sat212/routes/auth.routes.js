// routes/auth.routes.js

const { Router } = require('express');
const router = new Router();

const User = require('../models/User.model');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const saltRounds = 10;

// GET route ==> to display the signup form to users
router.get('/signup', (req, res) => res.render('auth/signup'));

// POST route ==> to process form data
router.post('/signup', (req, res, next) => {

  // console.log('The form data: ', req.body);
  const { username, email, password } = req.body;

   // make sure users fill all mandatory fields:

   if (!username || !email || !password) {
    res.render('auth/signup', { 
      errorMessage: 'All fields are mandatory. Please provide your username, email and password.' 
    });
    return;
  }

  bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash( password, salt))
    .then(hashedPassword => {

      return User.create({
        username,
        email,
        passwordHash: hashedPassword
      });

    })
    .then(userFromDB => {
      // console.log('Newly created user is: ', userFromDB);
      res.redirect('/userProfile');
    })
    .catch(error => {
    
      // copy the following if-else statement
      if (error instanceof mongoose.Error.ValidationError) {
          res.status(500).render('auth/signup', { errorMessage: error.message });
      } else if ( error.code === 11000 ) {
          res.status(500).render('auth/signup', {
            errorMessage: 'Invalid username and/or password'
          });
      } else {
        next(error);
      }
    
    });

});

/**************************************** */

/* L O G I N 

/**************************************** */

router.get('/login', (req, res) => {

  if (req.session.currentUser) {
    res.redirect('/userProfile');
    return;
  }

  res.render('auth/login')

});

router.post('/login', (req, res, next) => {
  
  console.log('SESSION =====> ', req.session);

  const { email, password } = req.body;
 
  if (email === '' || password === '') {
    res.render('auth/login', {
      errorMessage: 'Please enter both, email and password to login.'
    });
    return;
  }
 
  User.findOne({ email })
    .then(user => {
      if (!user) {
        console.log("Email not registered. ");
        res.render('auth/login', { errorMessage: 'User not found and/or incorrect password.' });
        return;
      } else if (bcryptjs.compareSync(password, user.passwordHash)) {
        req.session.currentUser = user;
        res.redirect('/userProfile');
      } else {
        console.log("Incorrect password. ");
        res.render('auth/login', { errorMessage: 'User not found and/or incorrect password.' });
      }
    })
    .catch(error => next(error));
});

router.get('/userProfile', (req, res) => {
  
  res.render('users/user-profile', { userInSession: req.session.currentUser });

});

router.post('/logout', (req, res, next) => {
  req.session.destroy(err => {
    if (err) next(err);
    res.redirect('/');
  });
});

module.exports = router;
