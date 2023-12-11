// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
// require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// default value for title local
const projectName = " Lesson | AXIOS CRUD";
app.locals.appTitle = `${projectName}`;

// 👇 Start handling routes here
const index = require("./routes/index.routes");
app.use("/", index);

// Import and link the newly created file
const movieCharactersRoutes = require("./routes/movie-characters.routes");
app.use("/", movieCharactersRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
