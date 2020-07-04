var express = require("express");
var path = require("path");
var friends = require("./app/data/friends.js");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"))
})

app.get("/api/friends", function(req, res) {
    return res.json(friends)
})

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"))
})

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend);

})


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });