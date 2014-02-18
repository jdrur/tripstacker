// *** custom jQuery ***
// jquery => select elements you want to act upon, then add a function
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



// add selected item to itinerary
var addItem = function(type) {
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
		addItem(type)
	});
});

// delete item from itinerary
$('.item_list').on('click', function(event) {
	console.log("click");
	$(event.target).remove();
});

// // ! add to itinerary !
// $('#add-hotel-iter').on('click', function(){
// 	var hotel_name = $('.hotels-selector').val();
// 	var hotel_coordinates = $('.hotels-selector').find(":selected").data('coordinates').split(',');
// 	var hotel_address = $('.hotels-selector').find(":selected").data('address');
// 	if ($('#hotel-itinerary').children().length < 1) {
// 		$('#hotel-itinerary').append("<li class='itinerary-item'>"+hotel_name+"<span id='hidden' class='glyphicon glyphicon-remove'><span></span></span></li>");
// 		var newMarker = new google.maps.Marker({
// 					position: new google.maps.LatLng(parseFloat(hotel_coordinates[0]), parseFloat(hotel_coordinates[1])),
// 					map: map,
// 					title: hotel_name,
// 					icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
// 		});
// 		newMarker.setMap(map);
// 	} else {
// 		// display warning banner - have reached max amount of hotels per day
// 	}
// });



// // add a day-btn
// $('#btn-add-day').on('click', function() {
// 	var dayNumber = $('#day-btn-list').children().length;
// 	dayNumber += 1;

// 	if (dayNumber < 4) {
// 		var newButton = $('#day-btn-list').append("<button type='button' class='btn btn-default btn-day'>Day " + dayNumber + "</button>");
// 	}
// });


// highlight current day
// $('#day-btn-list').on('click', function(event) {
// 	console.log("click");
// 	$(this).find(".btn-day").removeClass("btn-primary").addClass("btn-default");
// 	// on click, highlight the button
// 	$(event.target).addClass("btn-primary");
// 	// and display the concomitant itinerary
// 	var num = $(event.target).text().replace( /^\D+/g, '');
// 	$('.itinerary-day-'+num).show();
// 	$('.itinerary-day-'+num).siblings().hide();
// });
