var friends = require("../data/friends.js");

module.exports = function (app) {
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        friends.push(newFriend)
        res.json(friends)

    });

    app.get("/api/friends", function (req, res) {
        return res.json(friends)
    });
}