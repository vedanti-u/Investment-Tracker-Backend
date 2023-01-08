const { createPool } = require("mysql");
//this includes mysql module under this file

//define configuration for creating mysql database connection
const pool = createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test",
  connectionLimit: 10,
});

// pool.query("show tables;", (err, result, fields) => {
//   if (err) {
//     return console.log(err);
//   }
//   return console.log(result);
// });

module.exports = pool;
/*
const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = connection;
*/
