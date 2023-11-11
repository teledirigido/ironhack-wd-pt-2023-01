/**
Creating the folder structure with our NPM packages

1. Create folder
2. npm init -y
3. Install express via: npm install express
4. Install hbs via: npm install hbs
5. create app.js

Creating our first Express app

1. Initialize express on app.js
2. Define routes with app.get
3. Listen to the port with app.listen, usually with 3000
4. Define a public folder
5. Define a views and engine with HBS
6. Create a layout: layout.hbs
7. Create views and render them via res.render() inside app.get Eg:
**/

app.get('/about', (req, res) => {
  res.render('about') // This will check inside /views/about.hbs
})


