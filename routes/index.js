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
//  console.log(req.body);
var resultat = await journeyModel.find({ departure: req.body.from, arrival:req.body.to, date:req.body.date});
// console.log("RESULTAT",resultat)  
if (resultat.length == 0 ) { 
  res.redirect('/noticket')
} else { 
  res.render('result',{resultat:resultat})
}
  
});

/*adressage des pages de résultats*/
router.get('/result', async function (req,res,next){
  var resultat = await journeyModel.find({ departure: req.body.from, arrival:req.body.to, date:req.body.date});
  // var newDate = resultat[i].date.getDay();
  // console.log("HELLO", newDate);


  res.render('result', {resultat});
  });

/*adressage des pages d'erreursg*/
router.get('/noticket', function(req,res,next) {
  // console.log("coucou");
res.render('noticket');
});


module.exports = router;
