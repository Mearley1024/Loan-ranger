var express = require('express');
var router = express.Router();
var loancontroller = require("../../controllers/loancontroller.js")

router.route("/loan")
.post(loancontroller.create)

router.route("/loan/:key")
.get(loancontroller.find)
.put(loancontroller.update)


// Middleware - Router Specific
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.post('/loan', controller.create);
router.get('/loan', controller.getAll);
router.get('/loan/:id', controller.getById);
router.put('/loan/:id', controller.updateById);
router.delete('/loan/:id', controller.updateById);

module.exports = router;
