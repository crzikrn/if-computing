var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//question model to be within Game model
var question = new Schema({
  text: {
    type:String,
    required: true,
    default: 'Choose a Question'
  },
  answer:Boolean
});

//the full Game model
var gameSchema = new Schema({
  theme:{
    type:String,
    required:true,
    default: 'Choose a Theme'
  },
  question:[question],
  token:
    [{
        name: String,
        value: {
          type: Number,
          default: 0
        }
    }]
//get from collection ifscenario in MongoDB
},{collection:"ifscenario"});

module.exports = mongoose.model('Game', gameSchema);
