const router = require("express").Router();

const User = require("../models/User.model");
const Post = require("../models/Post.model");

// ****************************************************************************************
// GET route to display the form to create a new post
// ****************************************************************************************

// localhost:3000/post-create
router.get("/post-create", (req, res) => {
  User.find()
    .then((dbUsers) => {
      res.render("posts/create", { dbUsers });
    })
    .catch((err) => console.log(`Err while displaying post input page: ${err}`));
});

// ****************************************************************************************
// POST route to submit the form to create a post
// ****************************************************************************************

// <form action="/post-create" method="POST">

router.post("/post-create", (req, res) => {
  const { title, content, author } = req.body;

  Post.create({ title, content, author })
    .then( dbPost => {
      return User.findByIdAndUpdate(author, { $push: { posts: dbPost._id } })
    })
    .then( () => {
      res.redirect('/posts');
    })
    .catch( err => {
      console.log(`Err while creating the post in the DB: ${err}`);
      next(err);
    });
});

// ****************************************************************************************
// GET route to display all the posts
// ****************************************************************************************

router.get('/posts', (req, res) => {
  Post.find()
    .then( (postsDb) => {
      // res.send(postsDb);
      res.render('posts/list', { posts: postsDb });
    });
});

// ****************************************************************************************
// GET route for displaying the post details page
// shows how to deep populate (populate the populated field)
// ****************************************************************************************

// http://localhost:3000/posts/6564d94043bbb7ccbb3e1e60
router.get('/posts/:postId', (req, res) => {

  const { postId } = req.params;

  Post.findById(postId)
    .populate({
      path:'author',
      select: 'username -_id'
    })
    .populate({
      path: 'comments',
      populate: {
        path: 'author',
        select: 'username -_id',
      }
    })
    .then( postDb => {
      // res.send(postDb)
      User.find()
        .then( usersDb => {
          res.render('posts/details', { post: postDb, users: usersDb });
          // res.send({ post: postDb, users: usersDb });
        }) 
    })
});

module.exports = router;
