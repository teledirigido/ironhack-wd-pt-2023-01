const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    title: String,
    description: String,
    author: String,
    rating: Number
  },
  {
    timestamps: true
  }
)


const Book = model("Book", bookSchema);

module.exports = Book;