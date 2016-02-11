/**
 * Created by Aharon on 2/11/2016.
 */
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    var text = req.param('text');
    res.send(text);
});

module.exports = router;
