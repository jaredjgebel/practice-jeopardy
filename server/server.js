require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const Clue = require("./mongoose/index");

mongoose.connect(
  `mongodb://${process.env.DBUSER}:${
    process.env.DBPASSWORD
  }@ds311128.mlab.com:11128/heroku_f4gqd1mq`,
  {
    useNewUrlParser: true
  }
);

mongoose.connection.once("open", function() {
  console.log("database connection opened");
});

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.get("/clues", function(req, res) {
  Clue.aggregate([{ $sample: { size: 100 } }])
    .exec()
    .then(result => {
      res.header({
        "Access-Control-Allow-Origin": `http://localhost:3000`
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
app.listen(port);
