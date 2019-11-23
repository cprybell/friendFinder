var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/", function(req, res) {
    console.log("home");
    res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.get("/survey", function(req,res) {
    console.log("survey");
    res.sendFile(path.join(__dirname, "public", "survey.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});