const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");

// HBS engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));


// http://localhost:3000/
app.get("/", (req, res, next) => {
  
  const cities = ['Barcelona', 'Tortosa', 'Girona'];

  res.render("index", { cities });

});

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});