var mongoose = require('mongoose');
//var Token = require('./models/token.js');
//var Question = require('./models/question.js');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//go into public find static index.html (or any)
app.use(express.static(__dirname));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/ifscenario');
var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error: '));
db.on('open', function(){
   console.log('We are in');
   app.models = require('./models/index');
   //app.listen(theport);
   app.listen(3001);
   console.log('Server Running on Port 5000');
 });

/////////// FOR HEROKU ////////////////////////////////////////////////////////
// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
// var uristring =
//   process.env.MONGOLAB_URI ||
//   process.env.MONGOHQ_URL ||
//   'mongodb://localhost/ifscenario';
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
//
// mongoose.connection.once('open',function(){
//   app.models = require('./models/index');
//   app.listen(theport);
//   // app.listen(3001);
//   console.log('Server Running on Port 5000');
// });

///////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////          Game           ///////////////////
////////////////////////////////////////////////////////////////////////////////

//GET Data from Database
app.get('/set', function (req,res){
  app.models.Game.find(function(err,tokens){
      res.send(tokens);
    });
});

//POST to Empty Instance of Game model to DATABASE
app.post('/emptyScene', function (req,res){
  var game = new app.models.Game();
  game.save(function(err,doc){
    res.json(doc);
  });
});

//POST to DATABASE from the input forms
app.post('/set', function (req,res){
  console.log(req.body);
  var game = new app.models.Game(req.body);
  game.save(req.body, function(err, doc){
    res.json(doc);
  });
});

//DELETE Data from DATABASE by clicking on the Delete button
app.delete('/set/:id', function (req,res){
  var id = req.params.id;
  app.models.Game.findByIdAndRemove({_id: id}, function(err, doc){
    res.json(doc);
  })
});

//GET Data from Database to Update/Edit
app.get('/set/:id', function (req, res){
  //console.log(req.body);
  var id = req.params.id;
  app.models.Game.findOne({_id: id}, function(err,doc){
    console.log('edit from server');
    res.json(doc)
  });
});

//PUT update new data to existing data by pushing
app.put('/set/:id', function(req,res){
  var id = req.params.id;
  console.log(req.body.question);
  var update = {$push: {"question": {$each: req.body.question}}}

//   Testing pushing new data
//   var update = {
//     $push: {
//     "question": req.body.question,
//     "theme": req.body.theme,
//     "token": req.body.token
//   }
// };

  app.models.Game.findOneAndUpdate({_id: id}, update,function(err,doc){
    res.json(doc);
  });
});
