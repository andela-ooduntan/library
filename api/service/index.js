(function () {
  'use strict';
  var libModel = require('../model');

  module.exports = {
    findBook: function (searchTerm, cb) {
      libModel.find(searchTerm, cb);
    },

    addBook: function (newBookData, cb) {
      var newBook = libModel(newBookData);
      newBook.save(cb);
    },

    editBook: function (bookIdObject, newBookData, cb) {
      libModel.update(bookIdObject, newBookData, cb);
    },

    deleteBook: function (bookIdObject, cb) {
      libModel.remove(bookIdObject, cb);
    }
  }
}());