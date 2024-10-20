var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/home', function(req, res, next) {
  res.redirect("/home.html");
});

router.get('/login', function(req, res, next) {
  res.redirect("/login.html");
});

router.get('/contacto', function(req, res, next) {
  res.redirect("/contacto.html");
});


module.exports = router;
