require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const Clue = require("./mongoose/index");
const csp = require("helmet-csp");

const host = process.env.PRODUCTION
  ? "practice-jeopardy.herokuapp.com"
  : "http://localhost:3000";

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});

mongoose.connection.once("open", function() {
  console.log("database connection opened");
});

app.use(
  csp({
    directives: {
      defaultSrc: ["'none'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: [`'self'`],
      styleSrc: [`'self'`, "'unsafe-inline'"],
      manifestSrc: ["'self'"],
      connectSrc: ["*"]
    }
  })
);

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.get("/clues", function(req, res) {
  Clue.aggregate([{ $sample: { size: 100 } }])
    .exec()
    .then(result => {
      res.header({
        "Access-Control-Allow-Origin": host
      });
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}

app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});
