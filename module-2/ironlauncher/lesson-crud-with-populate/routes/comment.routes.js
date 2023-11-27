const router = require("express").Router();

const User = require("../models/User.model");
const Post = require("../models/Post.model");
const Comment = require("../models/Comment.model");

// ****************************************************************************************
// POST route - create a comment of a specific post
// ****************************************************************************************

// /posts/{{post._id}}/comment
router.post('/posts/:postId/comment', (req, res, next) => {
  
  const { postId } = req.params;
  const { author, content } = req.body;

  Comment.create({
    author: author,
    content: content 
  }).then( newComment => {
    return Post.findByIdAndUpdate(postId, { $push: { comments: newComment._id } })
  }).then( () => {
    res.redirect(`/posts/${postId}`)
  })

});

module.exports = router;
