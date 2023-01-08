var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.send("21212122123");
});

router.get("/:id", function (req, res) {
  res.render("test", { output: req.params.id });
});
module.exports = router;
