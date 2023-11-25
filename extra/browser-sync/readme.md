# Browsersync

### Installation

The Node.js package manager (npm) is used to install Browsersync from a repository. Open a terminal window and run the following command:  

`npm install -g browser-sync`

### Start Browsersync with command line

`browser-sync start --proxy 'localhost:3000' --files 'public' 'views'`

- [port]: Port of your app

### Start Browsersync with your app.js

Install your dependencies:
`npm install browser-sync`

Add on your app.js
```

// ... Rest of the code

const browserSync = require("browser-sync");

// Start the server
browserSync({
  proxy: "http://localhost:3000", // proxying the app domain
  files: ['public', 'views'] // watching the following folders
});
```