
/*
 * GET home page.
 */

var models = require('../models');

// Setup your routes.index to be something like this (you'll need all three data types from Mongoose):
exports.index = function(req, res){
	models.Hotel.find(function(err, hotels) {
		models.Restaurant.find(function(err, restaurants) {
			models.ThingsToDo.find(function(err, thingsToDos) {
				res.render('index', { hotels: hotels, restaurants: restaurants, thingsToDos: thingsToDos });
			});
		});
	});
};