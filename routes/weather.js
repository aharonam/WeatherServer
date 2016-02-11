/**
 * Created by Aharon on 2/11/2016.
 */
var express = require('express');
var router = express.Router();
var url = require('url');


/* GET users listing. */
router.get('/', function(req, res, next) {
    var url_parts = url.parse(req.url, true);
    var text = url_parts.text;
    res.send(text);
});

module.exports = router;
