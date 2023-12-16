// models/Movie.model.js

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema(
  {
    title: String,
    description: String,
    imageUrl: String // La URL en el servidor remoto de la imagen
  },
  {
    timestamps: true
  }
);

module.exports = model('Movie', movieSchema);
