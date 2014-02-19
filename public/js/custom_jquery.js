// *** custom jQuery ***
// jquery => select elements you want to act upon, then add a function to manipulate DOM
// global variable to keep track of what we are adding to each day
var myTrip = [];

var addNewDay = function() {
	myTrip.push({
		hotels: [],
		restaurants: [],
		thingsToDos: [],
		markers: []
	});
};

addNewDay();
var current_day = 0;

// add item to itinerary
var addItem = function(type) {
	// Finds selected value and stores value in myTrip.
	// Sets marker on map and appends itinerary to DOM
	var selected_value = $('#'+type+'_select').val();
	var item_key = selected_value.split('_')[1];
	var item = window['all_'+type+'s'][item_key];
	// We reference the all_hotels (etc.) variable through WINDOW to access global scope.
	$('#'+type+'_list').append('<li>'+item.place[0].name+'</li>').addClass('item_list');
	myTrip[current_day][type+'s'].push(item);

	var coordinates = new google.maps.LatLng(item.place[0].location[0], item.place[0].location[1]);
	var add_marker = new google.maps.Marker({position: coordinates, map: map, title: item.place[0].name});
	add_marker.setMap(map);
}

var types = ['hotel', 'thingsToDo', 'restaurant']

// wire up add buttons
types.forEach(function(type) {
	$('#'+type+'_add_button').on('click', function() {
		addItem(type);
	});
});


// delete item from itinerary
// $('.item_list').on('click', function(event) {
// 	console.log("click");
// 	$(event.target).remove();
// });


// add a new 'Day #' button
$('#day_add_button').on('click', function() {
	addNewDay();
	var new_day_button = "<button type='button' id='day_"+myTrip.length+"' class='btn btn-default day_button'>Day " + myTrip.length + "</button>";
	$('#day_list').append(new_day_button);

	myTrip.forEach(function(day) {
		console.log("day#: ", myTrip.indexOf(day))
	});
});

// var myTrip = [];

myTrip.forEach(function(day) {
	// when a day button is clicked, display the corresponding day
	$('#day_'+(myTrip.indexOf(day)+1)).on('click', function(event) {
		$(this).find(".day_button").removeClass("btn-primary").addClass("btn-default");
		$(event.target).addClass("btn-primary");
		console.log('click');
		current_day = ($(event.target).val()) - 1;
		// 	display(current_day);
	});
});
