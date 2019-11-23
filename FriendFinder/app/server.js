var express = require("express");
var path = require("path");

var app = express();
var port = 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.get("/survey", function(req,res) {
    res.sendFile(path.join(__dirname, "public", "survey.html"));
});