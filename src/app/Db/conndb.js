var mongoose = require('mongoose');

mongoose.connect('mongodb://Science4kids:Scienc4kids34@ds119598.mlab.com:19598/multimedios');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('conexion a db exitosa');
});
var Schema = mongoose.Schema;

var FactSchema = new Schema({
  IDFACT:{type : String, required: true},
  FactName: String,
  Animal: String,
  Facts: String,
});

var Fact = mongoose.model('Fact', FactSchema);

module.exports = Fact;


