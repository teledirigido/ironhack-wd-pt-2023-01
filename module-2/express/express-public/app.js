const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.send(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link href="/css/styles.css" rel="stylesheet">
    </head>
    <body>
      <h1>Hello world with Static files</h1>
      <img src="/images/cats.jpg">
    </body>
    </html>
  `);
});

app.listen(3000, () => console.log('My first app listening on port 3000! http://localhost:3000 '));