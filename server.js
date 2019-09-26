//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//Session
session = require('express-session');

app.use(session({
  secret: 'key',
  resave: false,
  saveUninitialized: true,
}))

//Config
app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.json());

//Database
mongoose.connect("mongodb://localhost/Survey");
require("./server/config/mongoose.js");

//Routes
require("./server/config/routes.js")(app);


//Port
app.listen(1337, function(){
    console.log("Listening on part: 1337");
});