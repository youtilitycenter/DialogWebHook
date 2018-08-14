'use strict';

var express = require('express');
module.exports = function(app) {
var skyReasearch = require('./Controller/SearchOnSky');
var apiRoutes =  express.Router();
	app.get('/',function(req,res){

	    	res.send('We are happy to see you using Chat Bot Webhook');
	    	
	  		});

	app.post('/',skyReasearch.processRequest);

};

