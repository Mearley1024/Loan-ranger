var express = require('express');
var router = express.Router();
var path = require('path');
var apiRoutes = require("./api")

/* GET home page. */
// router.get('/api/health', function(req, res, next) {
//   res.json({
//     app: 'project-3',
//     health: 200,
//   });
// });

router.use("/api", apiRoutes);

router.use(function(req,res){
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

module.exports = router;
