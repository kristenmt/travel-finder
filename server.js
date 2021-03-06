// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//require routes in folder
require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)

//port is listening
app.listen(PORT, function() {
    console.log("listening" + PORT);
});