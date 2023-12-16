// models/Movie.model.js

const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const defaultImageURL = '/images/default.png';

const movieSchema = new Schema(
  {
    title: String,
    description: String,
    imageUrl: {
      type: String, // La URL en el servidor remoto de la imagen
      default: defaultImageURL
    }
  },
  {
    timestamps: true
  }
);

movieSchema.pre('findOneAndUpdate', function(next) {

  this.model.findOne(this.getQuery())
    .then( modelData => {
      if (modelData.imageUrl === null) {
        modelData.imageUrl = defaultImageURL;
      }
      modelData.save();
    })
  next();
});


module.exports = model('Movie', movieSchema);
