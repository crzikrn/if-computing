var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var tokenSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  value:{
    type:Number,
    default: 0,
    required:true,
  },
  question:{
    text: {
      type: String,
      required: true
    },
    answer: Boolean,
  },
  token:{
    [{
        name: String,
        value: Number
    }]
  }
},{collection:"ifscenario"});

module.exports = mongoose.model('Token', tokenSchema);
