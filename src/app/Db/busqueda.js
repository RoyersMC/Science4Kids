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


Fact.find({}, function(err, facts) {
  if (err) {
    console.log('error 1');
  }


  console.log(facts);
});

Fact.find({ IDFACT: 'ID01' }, function(err, fact) {
  if (err) {
    console.log('error 1');
  }


  console.log(fact);
});
