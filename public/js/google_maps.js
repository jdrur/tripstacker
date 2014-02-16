var loadMap = (function() {

  // initialize new google maps LatLng object
  // the process of turning an address into a geographic point is known as geocoding.
  var myLatlng = new google.maps.LatLng(40.705786,-74.007672);

  // set the map options hash
  var mapOptions = {
    center: myLatlng,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  // get the maps div's HTML obj
  // var map_canvas_obj = document.getElementById("map-canvas");

  // initialize a new Google Map with the options
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  // add a marker to the page with the map property
  var marker = new google.maps.Marker({position: myLatlng, map: map, title:"Hello World!"});

	console.log("Map initialized.");
})();
