var express = require("express");
var app = express();
var router = express.Router();
const sql = require("./database.js");

router.get("/", function (req, res) {
  sql.query("select * from trans;", (err, result, fields) => {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
});

router.get("/user/:id", function (req, res) {
  const id = req.params.id;
  const sqlquery = "select * from trans where transid=" + sql.escape(id);
  sql.query(sqlquery, (err, result, fields) => {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
});

router.get("/:id", function (req, res) {
  const id = req.params.id;
  const sqlquery = "select * from trans where userid=" + sql.escape(id);
  sql.query(sqlquery, (err, result, fields) => {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
});

router.post("/", (req, res) => {
  const data = [
    req.body.userid,
    req.body.ticker,
    req.body.rate,
    req.body.amount,
    req.body.total,
  ];
  console.log(data);
  sql.query(
    `Insert into trans (userid,ticker,rate,amount,total) values ('${req.body.userid}','${req.body.ticker}','${req.body.rate}','${req.body.amount}','${req.body.total}')`,
    (err, result, fields) => {
      if (err) {
        return res.send(err);
      }
      return res.send(result);
    }
  );
});
module.exports = router;
