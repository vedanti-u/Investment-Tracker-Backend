const express = require("express");
const indexjs = require("./index.js");
const app = express(); //initializing express oi.e starting and getting all functions
//req obj->data goes from client to server
//res obj->data goes from server to client

app.use("/index", indexjs);

app.listen(8080, function (req, res) {
  console.log("Running..");
});

/*

/alien
/alien/:id
/alien POST


/test
/test/getTest
/test/getTest/:id


/index/
/index

1. index.js
2. aliens.js
3. test.js



app.js 
 "/tst" =>test.
 "/index" =>index.js
 "/alien" =>alien



*/
