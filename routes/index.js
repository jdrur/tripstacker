
/*
 * GET home page.
 */

var models = require('../models');

// Setup your routes.index to be something like this (you'll need all three data types from Mongoose):
exports.index = function(req, res){
  models.Hotel.find(function(err, results) {
    res.render('index', { hotels: results });
  });
};

// 1) define 3 variables
// 	get all hotels
// 	get all thingstodo
// 	get all restaurants

// 2) make 3 variables available in page

// models.ThingToDo.find(err, results)
// models.Restaurant.find(err, results

// 	exports.index = function(req, res){
//   var db = models.find();
//   db.find(function(err, results) {
//     // res.render('index', { hotels: results.hotels, thingsToDo: results.thingsToDo, restaurants: results.restaurants });
//   });
// };)

// exports.index = function(req, res){
//   var db = models.find();
//   db.find(function(err, results) {
//     // res.render('index', { hotels: results.hotels, thingsToDo: results.thingsToDo, restaurants: results.restaurants });
//   });
// };