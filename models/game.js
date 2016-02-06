var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var question = new Schema({
  text: {
    type:String,
    required: true,
    default: 'Choose a Question'
  },
  answer:Boolean
});

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

},{collection:"ifscenario"});

module.exports = mongoose.model('Game', gameSchema);
