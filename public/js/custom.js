// *** Google Maps API ***
// There are three (3) parts to successfully loading a google Maps API:
//
// First, you must designate a space for the map to be displayed on the HTML page (<div class="map-canvas">)
// Second, you must load the Google Maps API v3 with a script tag, usually in the head of the views file. In TripStacker, we loaded it after the footer in the <body> tag.
// Third, you must initialize the map with JavaScript. You can add a script tag directly in the HTML file, or you can require a separate Javascript file that initializes the map.

// * initialize new google maps LatLng object *
// the process of turning an address into a geographic point is known as geocoding.
var latAndLong = new google.maps.LatLng(40.705786,-74.007672);

// * create a Map options object *
// these options are used to initialize the map's properties
// center (what map will focus on) and zoom (0-22) are required fields. There are optional fields such as mapTypeId (ROADMAP, SATELLITE, HYBRID, TERRAIN).
var mapOptions = {
  center: latAndLong,
  zoom: 13,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

// * get the maps div's HTML obj *
// this step was superfluous, but it shows how we can save the DOM element as a JavaScript variable
// var map_canvas_obj = document.getElementById("map-canvas");

// * create a map object with the Map constructor function. *
// Map takes two parameters: DOM element and mapOptions object *
var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

// * add a marker to the page with the Marker constructor *
// Marker constructor takes a single object literal, which specifies the initial properties of the marker (position, map)
// Google has a tutorial for markers: http://bit.ly/MpWc8W
var initialMarker = new google.maps.Marker({
										position: latAndLong,
										map: map,
										title: "Hello, Fullstack!"
									});

google.maps.event.addDomListener(window, 'load');
console.log("Map initialized.");

// var anotherMarker = new google.maps.Marker({
// 				position: new google.maps.LatLng(40.705137, -74.007624),
// 				map: map,
// 				title: "Andaz Wall Street"
// 			});

// * use setMap() to add a marker directly to the map *
// anotherMarker.setMap(map);
console.log("adding marker...")

// Google recommends => google.maps.event.addDomListener(window, 'load', initialize);
// Alternatively, you could wrap the entire API in a $(document).ready tag.
// *** END ***


// *** jQuery ***

// ! add to itinerary !
$('#add-hotel-iter').on('click', function(){
	var hotel = $('.hotels-selector').val();
	$('#hotel-itinerary').append("<li>"+hotel+"</li>");

});

$('#add-thingToDo-iter').on('click', function(){
	var thingToDo = $('.thingsToDo-selector').val();
	$('#thingToDo-itinerary').append("<li>"+thingToDo+"</li>");
});

$('#add-restaurant-iter').on('click', function(){
	var restaurant = $('.restaurants-selector').val();
	$('#restaurant-itinerary').append("<li>"+restaurant+"</li>");
});

// ! add Day button !
$('#add-day-btn').on('click', function() {
	var dayNumber = $('#day-btn-list').children().length;
	dayNumber += 1;
	var newButton = $('#day-btn-list').append("<button type='button' class='btn btn-default day-btn'>Day " + dayNumber + "</button>");
});

// ! highlight current day !
$('#day-btn-list').children().on('click', function() {
	$(this).removeClass('btn-default').addClass('btn-primary');
	console.log("click");
});
