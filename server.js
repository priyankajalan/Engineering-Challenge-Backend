'use strict';

//Requiring all modules
var express = require('express'),
	app = express(),
	mongojs = require('mongojs'),
	db = mongojs('foodlist',['foodlist']),
	bodyParser = require('body-parser');

//Using a static directory for loading the view which is present in the client folder in this app
app.use(express.static(__dirname + "/client"));
//Parse the data received
app.use(bodyParser.json());

//Receive the list of food from the database
app.get('/foodlist', function(req,res){
	console.log("I received a GET Request");
	
	//Mongodb function to get the list of all foods
	db.foodlist.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});

//Add the new food name and company
app.post('/foodlist',function(req,res){
	console.log(req.body);

	//Mongodb function to save the data into the database
	db.foodlist.insert(req.body,function(err,doc){
		res.json(doc);
	});
});

//Server to listen to specific port
app.listen(3000, function(){
	console.log('I am Listening to port 3000');
});