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

/////////// FOR HEROKU ////////////////////////////////////////////////////////
// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
// var uristring =
//   process.env.MONGOLAB_URI ||
//   process.env.MONGOHQ_URL ||
//   'mongodb://localhost/HelloMongoose';
//
// // The http server will listen to an appropriate port, or default to
// // port 5000.
// var theport = process.env.PORT || 5000;
//
// // Makes connection asynchronously.  Mongoose will queue up database
// // operations and release them when the connection is complete.
// mongoose.connect(uristring, function (err, res) {
//   if (err) {
//     console.log ('ERROR connecting to: ' + uristring + '. ' + err);
//   } else {
//     console.log ('Succeeded connected to: ' + uristring);
//   }
// });
///////////////////////////////////////////////////////////////////////////////

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
    //console.log("GET REQUESTED for Tokens");
});

app.post('/tokenlist', function (req,res){
  console.log(req.body);
  var token_new = new Token(req.body);
  token_new.save(req.body, function(err, doc){
    res.json(doc);
  });
});

app.delete('/tokenlist/:id', function (req,res){
  var id = req.params.id;
  console.log(id);
  Token.findByIdAndRemove({_id: id}, function(err, doc){
    res.json(doc);
  });
});

app.get('/tokenlist/:id', function (req,res){
  var id = req.params.id;
  console.log(id);
  Token.findOne({_id: id}, function(err, doc){
    console.log('editing'+id);
    //console.log(token);
    res.json(doc);
  });
});

app.put('/tokenlist/:id', function(req,res){
  var id = req.params.id;
  Token.findOneAndUpdate({_id: id}, req.body,function(err,doc){
    res.json(doc);
  });
});

//app.listen(theport);
app.listen(3001);
console.log('Server Running on Port 5000');
