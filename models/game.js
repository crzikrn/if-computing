var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var gameSchema = new Schema({
  theme:{
    type:String,
    required:true,
    default: 'Choose a Theme'
  },
  question:[{
    text: {
      type: String,
      required: true,
      default: 'Choose a Question'
    },
    answer: Boolean,
  }],
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
