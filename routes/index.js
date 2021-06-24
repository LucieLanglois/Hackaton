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

module.exports = router;
