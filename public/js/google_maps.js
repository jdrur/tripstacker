var loadMap = (function() {

  // initialize new google maps LatLng object
  // the process of turning an address into a geographic point is known as geocoding.
  // var myLatlng = new google.maps.LatLng(40.705786,-74.007672);

  // set the map options hash
  var mapOptions = {
    center: new google.maps.LatLng(40.705786,-74.007672),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  // get the maps div's HTML obj
  // var map_canvas_obj = document.getElementById("map-canvas");

  // initialize a new Google Map with the options
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	  // Add the marker to the map
	//   var marker = new google.maps.Marker({
	//     position: myLatlng,
	//     title:"Ping!"
	//   });

	//   // Add the marker to the map by calling setMap()
	//   marker.setMap(map);
	// }
	console.log("Map initialized.");
	// console.log("myLatlng: ", myLatlng);
	// console.log("map_canvas_obj: ", map_canvas_obj);
	console.log("mapOptions: ", mapOptions);
	console.log("map: ", map);
})();
