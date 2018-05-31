var mongoose = require('mongoose');

mongoose.connect('mongodb://Science4kids:Scienc4kids34@ds119598.mlab.com:19598/multimedios');
var Schema = mongoose.Schema;
var FactSchema = new Schema({
  IDFACT:{type : String, required: true},
  FactName: String,
  Animal: String,
  Facts: String,
});

var connection = mongoose.createConnection('mongodb://Science4kids:Scienc4kids34@ds119598.mlab.com:19598/multimedios');
var Fact = connection.model('Fact', FactSchema);
//large va el id a borrar
Fact.deleteOne({ IDFACT: 'large' }, function (err) {
  if (err) return handleError(err);

});
