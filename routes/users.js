var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/myTickets', function(req, res, next) {
  res.render('myTickets');
});

router.get('/myLastTrips', function(req, res, next) {
  res.render('myLastTrips');
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
