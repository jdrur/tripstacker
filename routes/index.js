
/*
 * GET home page.
 */

var models = require('../models');

// Setup your routes.index to be something like this (you'll need all three data types from Mongoose):
exports.index = function(req, res){
	models.Hotel.find(function(err, hotels) {
		// console.log(hotels);
		models.Restaurant.find(function(err, restaurants) {
			// console.log(restaurants);
			models.ThingsToDo.find(function(err, thingsToDos) {
				// console.log(thingsToDos);
				res.render('index', { hotels: hotels, restaurants: restaurants, thingsToDos: thingsToDos });
			});
		});
	});
};


// 1) define 3 variables
// 	get all hotels
// 	get all thingstodo
// 	get all restaurants

// 2) make 3 variables available in page
