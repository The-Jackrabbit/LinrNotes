const express = require("express");
const path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "./dist/")));
app.listen(7777, function() {
    console.log("server started");
})