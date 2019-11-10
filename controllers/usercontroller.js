//  var db= require("../models")


module.exports = {
    create: function (req, res) {
        console.log("user create")

        // from the react they call with ajax /api/user  / incluede in the data all the user info
        // you will recive in the req.body
        // you will create the user in the db
        // you sel res.json(dbresponse) to come back to the front end
    },

    find: function (req, res) {
        console.log("user find")
    },
    findAll: function (req, res) {
        console.log("user findall")
    },

    update: function (req, res) {
        console.log("user update")

    }
}