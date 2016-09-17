(function () {
  'use strict';

  var express = require('express'),
    routes = express.Router(),
    appCtrl = require('../controller');

  routes.get('/library', appCtrl.getAllLibs);
  routes.post('/library', appCtrl.createLibs);
  routes.get('/library/:id', appCtrl.getALib);
  routes.put('/library/:id', appCtrl.editLib);
  routes.delete('/library/:id', appCtrl.deleteLib);

  module.exports = routes;
}());