(function () {
  'use strict';

  var mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/libraryApp', function (err) {
    console.log(err ? err : 'connected to libraryApp DB');
  });

  var schema = mongoose.Schema({
    title: String,
    author: String,
    publisher: String,
    year: String,
    quantity: String,
    price: String
  });

  module.exports = mongoose.model('bookStores', schema);
}());