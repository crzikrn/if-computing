var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var tokenSchema = new Schema({
  name:{type:String,required:true},
  value:{type:Number, default: 0}
},{collection:"ifscenario"});

module.exports = mongoose.model('Token', tokenSchema);
