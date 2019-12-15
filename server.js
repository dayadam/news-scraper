const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/newsScrapeDB", { useNewUrlParser: true });
// Make public a static folder
app.use(express.static("public"));
const db = require("./models");

require("./routes/api-routes.js")(app, db);

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
