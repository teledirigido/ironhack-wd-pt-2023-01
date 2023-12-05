const { Schema, model } = require("mongoose");

const moviesSchema = new Schema({
  title: String,
  duration: String,
  genre: {
    type: String,
    enum: ['drama', 'horror', 'comedy']
  }
});


const Movie = model("Movie", moviesSchema);

module.exports = Movie;
