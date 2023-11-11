const express   = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  const data = {
    name: 'Michi',
    age:2,
    toys: ['ball', 'keyboard', 'enchufes']
  }
  res.render("index", data)
});
app.get("/players", (req, res, next) => res.render("players"));
app.get("/teams", (req, res, next) => res.render("teams"));

app.listen(3000);
