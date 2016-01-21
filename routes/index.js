var express = require('express');
var router = express.Router();
var weatherDb = require('../services/weatherDb');

/* GET home page. */
router.get('/', function(req, res, next) {
  var dbInstance = new weatherDb("weather");
  dbInstance.db.insert({
    name: "bla bla"
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
