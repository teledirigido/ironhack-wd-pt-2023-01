
const express = require('express');
const app = express();
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/about", (req, res, next) => {
  res.render("page-about");
});

module.exports = router;
