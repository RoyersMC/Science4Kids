var mongoose = require('mongoose');

mongoose.connect('mongodb://Science4kids:Scienc4kids34@ds119598.mlab.com:19598/multimedios');

var Schema = mongoose.Schema;

var FactSchema = new Schema({
  IDFACT:{type : String, required: true},
  FactName: String,
  Animal: String,
  Facts: String,
});

var Fact = mongoose.model('Fact', FactSchema);

var fct1 = new Fact({
  IDFACT:'ID01',
  FactName:'Corales1',
  Animal:'Coral',
  Facts:'Aunque los corales parescan rocas son animales'
});

fct1.save(function(err) {
  if (err) throw err;

  console.log('Fact saved successfully!');
});
