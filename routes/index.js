var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var journeyModel = require('../model/journeys');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

/* homepage partie 2 avec le calendrier */
router.get('/homepage', function (req,res,next){
 /*  if (req.session.user == null) {
    res.redirect('/');
  } */
res.render('homepage');
})

/*formulaire de recherche qui va chercher dans la BDD  */
router.post('/booking', async function (req,res,next){
  console.log("coucou");
console.log(req.body);
var from = await journeyModel.findOne({departure: req.body.from})

res.redirect('/result');
} )

/*adressage des pages de résultats*/
router.get('/result', function (req,res,next){
  res.render('result');
  })

/*adressage des pages d'erreursg*/
router.get('/error', function(res,req,next) {
res.render('error');
})


module.exports = router;
