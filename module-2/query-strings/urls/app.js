// Initialize express
const express = require("express");
const app = express();

app.get('/', (req, res, next) => {
  console.log(req.query);
});

app.listen(3000, () => { console.log('Listening on http://localhost:3000') })