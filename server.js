// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override")

var app = express();
var port = 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(express.static("public/assets/css"));
app.use(express.static("public/assets/img"));


// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.get("/", function(req, res) {
// 	res.sendFile(path.join(__dirname, "..public/test.html"));
// })

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

module.exports = app;

// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});