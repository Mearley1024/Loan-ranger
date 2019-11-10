var express = require('express');
var router = express.Router();
var usercontroller = require("../../controllers/usercontroller")


// api/user  (info in the body for the post r nothing for reatrive all users)
router.route("/user")
.post(usercontroller.create)
.get(usercontroller.findAll)


// api/user/id  (the key will be the user id (userid) for get  or user id for update plus in the body the data to change)
router.route("/user/:id")
.get(usercontroller.find)
.put(usercontroller.update)




module.exports = router;
