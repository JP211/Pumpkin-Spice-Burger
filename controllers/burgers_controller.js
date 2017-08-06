// Inside the burgers_controller.js file, import the following:
// Express
// burger.js

var express = require("express");

var router = express.Router();

var bodyParser = require("body-parser");

var burger = require("../models/burger.js")

// Create the router for the app, and export the router at the end of your file.

router.use(bodyParser.urlencoded({
	extended: false
}));
var urlencodedParser = bodyParser.urlencoded({
	extended: false 
});

router.get("/", function (req, res) {
	burger.selectAll(function(data) {
		res.render("index", {data : data });
	});
});

router.post("/updateOne/:burger_name", function(req, res) {
	var burger_name = req.params.burger_name;
	burger.updateOne(burger_name, function(data) {
		res.redirect("/");
	});
});

router.post("/insertOne/", urlencodedParser, function(req, res) {
	var burger_name = req.body.burgertoadd;
	burger.insertOne(burger_name, function(data) {
		res.redirect("/");
	});
});

router.post('/deleteOne/:burger_name', function(req,res) {
  var burger_name = req.params.burger_name;
  burger.deleteOne(burger_name, function(data){
    res.redirect('/');
  });
});

module.exports = router;