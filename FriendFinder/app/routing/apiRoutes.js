var friendsData = require("../data/friends.js");
var path = require("path");

module.exports = function(app) {
    app.get("/api/friends", function(req,res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        if (isValidInput(req.body)) {
            friendsData.push(req.body);
            res.json(true);
        }
        else {
            res.json(false);
        }
    });
}

function isValidInput(friendObject) {
    if(friendObject.name === "") {
        return false;
    }
    if (friendObject.photo === "") {
        return false;
    }
    for (i = 0; i < friendObject.scores.length; i++) {
        if (friendObject.scores[i] === NaN) {
            return false;
        }
    }
    return true;
}