const express = require("express");
const userjs = require("./user.js");
const transjs = require("./trans.js");
const app = express();
var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use("/user", userjs);
app.use("/trans", transjs);

app.listen(8080, function (req, res) {
  console.log("Running..");
});
