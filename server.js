var express = require('express');
var app = express();

//go into public find static index.html (or any)
app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log('Server Running on Port 3000');
