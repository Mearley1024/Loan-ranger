const express = require("express");
const path = require('path');

// const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models")
// Configure body parsing for AJAX requests
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/loanranger",
//   {
//     useCreateIndex: true,
//     useNewUrlParser: true
//   }
// );

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

// Start the API server
db.sequelize.sync({
  force: false
}).then(function () {
  app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
  )
})