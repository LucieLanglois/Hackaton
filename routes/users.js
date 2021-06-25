var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var userModel = require('../model/users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/homepage', function (req,res,next){

  res.render('homepage');
  })

router.post('/sign-up', async function(req,res,next){
var searchUser = await userModel.findOne({
  email: req.body.emailFromFront
})

if(!searchUser){
  var newUser = new userModel({
    username: req.body.usernameFromFront,
    email: req.body.emailFromFront,
    password: req.body.passwordFromFront,
  })

  var newUserSave = await newUser.save();

  req.session.user = {
    name: newUserSave.username,
    id: newUserSave._id,
  }

  // console.log(req.session.user)

  res.redirect('/homepage')
} else {
  res.render('login')
}});


router.post('/sign-in', async function(req,res,next){

  var searchUser = await userModel.findOne({
    email: req.body.emailFromFront,
    password: req.body.passwordFromFront
  })
// console.log(searchUser);
  if(searchUser!= null){
    // console.log("hello");
    req.session.user = {
      name: searchUser.username,
      id: searchUser._id
    }
    res.redirect('/')
  } else {
    res.render('login')
  }

  
});


router.get('/myTickets', async function(req, res, next) {
  
  res.render('myTickets',{});
});

router.get('/myLastTrips', function(req, res, next) {
  res.render('myLastTrips');
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/logout', function(req,res,next){

  req.session.user = null;

  res.redirect('/')
});


module.exports = router;
