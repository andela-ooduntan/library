(function () {
  'use strict';

  var appService = require('../service');

  module.exports = {
    getAllLibs: function (req, res) {
      var query = req.query.q;
      var searchTerm = {};

      if (query) {
        var regExSearch = new RegExp(query, 'i');

        searchTerm = {
          $or: [
            { title:  regExSearch},
            { author:  regExSearch},
            { publisher: regExSearch },
            { year: regExSearch },
            { quantity: regExSearch }
            ]
        }
      }

      appService.findBook(searchTerm, function (error, result) {
        if(!error) return res.send({result: result});

        return res.send({error: error});
      })
    },

    createLibs: function (req, res) {
      appService.addBook(req.body, function (error, result) {
        if(!error) return res.send({result: result});

        return res.send({error: error});
      });
    },

    getALib: function (req, res) {
      appService.findBook({_id: req.params.id}, function (error, result) {
        if(!error) return res.send({result: result});

        return res.send({error: error});
      });
    },

    editLib: function (req, res) {
      var bookId = {_id: req.params.id};

      appService.editBook(bookId, req.body, function (error, result) {
        if(!error) return res.send({result: result});

        return res.send({error: error});
      });
    },

    deleteLib: function (req, res) {
      appService.deleteBook({_id: req.params.id}, function (error, result) {
        if(!error) return res.send({result: result});

        return res.send({error: error});
      });
    }
  }
}());