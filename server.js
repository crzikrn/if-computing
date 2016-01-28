var mongoose = require('mongoose');
var Token = require('./models/token.js');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect('mongodb://localhost/ifscenario');
var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error: '));
db.on('open', function(){
   console.log('We are in');
 });

//go into public find static index.html (or any)
app.use(express.static(__dirname));
app.use(bodyParser.json());

////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////          TOKENS           ///////////////////
////////////////////////////////////////////////////////////////////////////////

app.get('/tokenlist', function (req,res){
  Token.find(function(err,tokens){
    console.log(tokens);
      res.send(tokens);
    });
    console.log("GET REQUESTED for Tokens");
});

app.listen(3000);
console.log('Server Running on Port 3000');
