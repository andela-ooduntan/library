(function () {
  var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    apiRoutes = require('./api/routes');
    morgan = require('morgan');

  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.set('view engine', 'jade');
  app.use(apiRoutes);
  app.use(express.static(__dirname + '/app'));
  app.get('/*', function (req, res) {
    res.render(__dirname + '/app/index.jade');
  });

  app.listen(3008, function () {
    console.log('App started at port 3008');
  });
}());