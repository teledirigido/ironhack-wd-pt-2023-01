const express   = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");


app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));


app.get('/', (req, res, next) => {
  let myVar = ['Home',1,2,3,4];
  res.send(myVar);
});

app.get('/page', (req,res,next) => {
  const data = {
    name: 'Eric',
    school: 'Ironhack'
  };
  res.render('index', data);
});

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000 🎉');
});