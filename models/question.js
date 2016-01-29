var mongoose = require('mongoose');
//var Token = require('./token.js');

var Schema = mongoose.Schema;
var questionSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  tokenlist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Token'
  }]
},{collection:"ifscenario"});

module.exports = mongoose.model('Question', questionSchema);
