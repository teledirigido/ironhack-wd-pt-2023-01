const router = require("express").Router();
const Product = require("../models/Product.model");


// /products/
router.get('/', (req, res) => {
  Product.find()
    .then( allProducts => {
      res.json(allProducts);
    });
});


// /products/new
router.post("/new", (req, res) => {
  
  const { title, price, image, stock, productType } = req.body;

  Product.create({ title, price, image, stock, productType })
    .then( (newProduct) => {
      res.json(newProduct)
  }).catch( err => {
    res.json(err)
  });

});

// products/id
router.get("/:id", (req, res) => {

  const { id } = req.params;
  
  Product.findById(id)
    .then( (productFromDB) => {
      res.json(productFromDB);
    });

});

// products/id/edit
router.post('/:id/edit', (req, res) => {

  const { id } = req.params;
  const { title, price, image, stock, productType } = req.body;

  Product.findByIdAndUpdate(id, { title, price, image, stock, productType }, { new: true })
    .then( (updatedProductFromDB) => {
      res.json(updatedProductFromDB)
    });

});

// /products/id/delete
router.post('/:id/delete', (req, res) => {
  const { id } = req.params;

  Product.findByIdAndDelete(id)
    .then( () => {
      res.json(`Product ${id} has been deleted`);
    })
})

module.exports = router;