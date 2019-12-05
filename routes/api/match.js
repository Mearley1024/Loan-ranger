var express = require('express');
var router = express.Router();
var matchcontroller = require("../../controllers/matchcontroller.js")

router.route("/match")
.post(matchcontroller.create)

router.route("/match/:key")
.get(matchcontroller.findById)

module.exports = router;