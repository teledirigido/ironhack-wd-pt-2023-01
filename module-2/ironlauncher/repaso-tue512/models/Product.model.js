const { Schema, model} = require("mongoose");

const productSchema = new Schema({
  title: String,
  price: Number,
  image: {
    type: String,
  },
  stock: {
    type: Number
  },
  productType: {
    type: String,
    enum: ['virtual', 'physical']
  }
});

const Product = model("Product", productSchema);

module.exports = Product;

