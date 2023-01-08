//const app = require("express");
var express = require("express");
var app = express();
var router = express.Router();
const sql = require("./database.js");
/*
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
*/
// configure the app to use bodyParser()

// const app = express();
// app.use(express.json);

router.get("/", function (req, res) {
  sql.query("select * from user;", (err, result, fields) => {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
});

router.get("/:id", function (req, res) {
  //var a = req.body;
  //   res.render("test", { output: req.params.id });
  const id = req.params.id;
  const sqlquery = "select * from user where id=" + sql.escape(id);
  sql.query(sqlquery, (err, result, fields) => {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
});

// router.use(bodyParser.json());

router.post("/", (req, res) => {
  const data = [req.body.name, req.body.email];
  console.log(data);
  sql.query(
    `Insert into user (name,email) values ('${req.body.name}','${req.body.email}')`,
    (err, result, fields) => {
      if (err) {
        return res.send(err);
      }
      return res.send(result);
    }
  );
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  //console.log(email);
  //console.log(password);
  //SELECT password from user WHERE email='vedanti.uu@gmail.com';
  sql.query(
    `SELECT password from user WHERE email='${email}'`,
    (err, result, fields) => {
      if (err) {
        return res.send(err);
      }
      //return res.send(result);
      // Object.keys(result).forEach(function (key) {
      //   var row = result[key];
      //   console.log(row.name);
      // });
      //console.log(result[0].password);

      var schemaMsg = { message: "", id: "" };

      if (password == result[0].password) {
        sql.query(
          `SELECT id from user WHERE email='${email}'`,
          (err, result, fields) => {
            if (err) {
              return res.send(err);
            }
            //console.log(result[0].id);

            schemaMsg.message = "User Authenticated Successfully !";
            schemaMsg.id = result[0].id;
            return res.send(schemaMsg);
          }
        );
      } else {
        schemaMsg.message = "User Authentication Failed !";
        schemaMsg.id = null;
        return res.send(schemaMsg);
      }
      //return res.send(result);
    }
  );
});

module.exports = router;

//json passing

//url encoded data

/*
router.get("/", function (req, res) {
  res.send("21212122123");
});

router.get("/:id", function (req, res) {
  res.render("test", { output: req.params.id });
});
module.exports = router
*/

// router.get("/:id", function (req, res) {
//   //   res.render("test", { output: req.params.id });
//   const id = req.params.id;
//   //const sqlquery = "select * from user where id=" + sql.escape(id);
//   sql.query("select * from user where id=?", [id], (err, result, fields) => {
//     if (err) {
//       return res.send(err);
//     }
//     return res.send(result);
//   });
// });
// module.exports = router;
/*
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});
*/
// //app.get('/:id', (req, res) => {
//     res.send(`<h1>${req.params.id}</h1>`);
// });
// module.exports = router;
/*

pool.query("show tables;", (err, result, fields) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
});
*/
