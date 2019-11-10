const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const loanRoutes = require("./loans");

// user routes
router.use("/user", userRoutes);

// loan Routes
router.use("/loan", loanRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
