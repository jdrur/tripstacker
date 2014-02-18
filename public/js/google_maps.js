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
// Stack Overflow thread on changing color: http://bit.ly/1faa0yW
var initialMarker = new google.maps.Marker({
										position: latAndLong,
										map: map,
										title: "Hello, Fullstack!"
									});

// google.maps.event.addDomListener(window, 'load');
console.log("Map initialized.");

// Google recommends => google.maps.event.addDomListener(window, 'load', initialize);
// Alternatively, you could wrap the entire API in a $(document).ready tag.
// google.maps.event.addDomListener(window, 'load', initialize);