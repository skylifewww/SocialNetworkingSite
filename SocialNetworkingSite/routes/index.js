var express = require('express');
var path = require('path');
var router = express.Router();
var userManagement = require('./userManagement')

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index');
});

/* GET signin page. */
router.get('/signin', function(req, res, next) 
{
  res.render('signin');
});

/* GET register page. */
router.get('/register', function(req, res, next) 
{
  res.render('register');
});

//TODO: Need to identify errors in user input and show them to the user
router.post('/registerUser', function(req, res, next) 
{
	var userInfo = 
	{
		name : req.body.name,
		email : req.body.email,
		age : req.body.age,
		password : req.body.age
	}

	if(userManagement.registerUser(userInfo))
	{
		res.render('index');
	}
	else
	{
		res.render('register');
	}
});

router.post('/signin', function(req, res, next) 
{
	userManagement.signInUser(req.body.email, req.body.password, res);
});

module.exports = router;
