var express = require('express');
var router = express.Router();
var loancontroller = require("../../controllers/loancontroller")

router.route("/loan")
.post(loancontroller.create)

router.route("/loan/:key")
.get(loancontroller.find)
.put(loancontroller.update)




module.exports = router;