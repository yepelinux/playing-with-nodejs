var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yepe ' + req.param("perro")
  + ' - >' + req.param("saludo")});
});

/* GET home page. */
router.get('/salchicha', function(req, res, next) {
  res.render('perrosalchicha');
});

module.exports = router;
