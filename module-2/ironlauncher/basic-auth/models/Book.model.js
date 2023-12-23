// models/User.model.js
const { Schema, model } = require('mongoose');

const bookSchema = new Schema(
  {
    title: String,
    description: String,
    author: { 
      type: Schema.Types.ObjectId, 
      ref: "User"
    },
  },
  {
    timestamps: true
  }
);

module.exports = model('Book', bookSchema);
