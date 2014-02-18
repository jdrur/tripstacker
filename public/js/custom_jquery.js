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

// add the item to itinerary
// type => hotel, thingsToDo, restaurant
var addItem = function(type) {
	var selected_value = $('#'+type+'_select').val();
	var item_key = selected_value.split('_')[1];
	var item = window['all_'+type+'s'][item_key];

	$('#'+type+'_list').append('<li>'+item.place[0].name+'</li>').addClass('item_list');
	myTrip[current_day][type+'s'].push(item);

	var coordinates = new google.maps.LatLng(item.place[0].location[0], item.place[0].location[1]);
	var add_marker = new google.maps.Marker({position: coordinates, map: map, title: item.place[0].name, icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'});
	add_marker.setMap(map);
}

var types = ['hotel', 'thingsToDo', 'restaurant']

// wire up add buttons
types.forEach(function(type) {
	$('#'+type+'_add_button').on('click', function() {
		addItem(type)
	});
});

$('#'+type+'_add_button').on('click', function() {
	$('#'+type+'_list').append('<li>'+item.place[0].name+'</li>').addClass('item_list');
	myTrip[current_day][type+'s'].push(item);
})



// $('#hotel_add_button').on('click', function() {
// 	var value = $('#hotel_select').val();
// 	var key = value.split('_')[1];
// 	var item = all_hotels[key];

// 	$('#hotel_list').append('<li>'+item.place[0].name+'</li>').addClass('item_list');
// 	myTrip[current_day]['hotels'].push(item);

// 	var coordinates = new google.maps.LatLng(item.place[0].location[0], item.place[0].location[1]);
// 	var add_marker = new google.maps.Marker({position: coordinates, map: map, title: item.place[0].name, icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'});
// 	add_marker.setMap(map);
// });


// $('#thingsToDo_add_button').on('click', function() {
// 	var value = $('#thingsToDo_select').val();
// 	var key = value.split('_')[1];
// 	var item = all_thingsToDo[key];

// 	$('#thingToDo_list').append('<li>'+item.place[0].name+'</li>').addClass('item_list');
// 	myTrip[current_day]['thingsToDos'].push(item);

// 	var coordinates = new google.maps.LatLng(item.place[0].location[0], item.place[0].location[1]);
// 	var add_marker = new google.maps.Marker({position: coordinates, map: map, title: item.place[0].name, icon: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png'});
// 	add_marker.setMap(map);
// });


// $('#restaurant_add_button').on('click', function() {
// 	var value = $('#restaurant_select').val();
// 	var key = value.split('_')[1];
// 	var item = all_restaurants[key];

// 	var delete_button = "<span id='hidden' class='glyphicon glyphicon-remove'><span></span></span>";
// 	$('#restaurant_list').append("<li class='list_item'>"+delete_button+item.place[0].name+"</li>")
// 	myTrip[current_day]['restaurants'].push(item);

// 	var coordinates = new google.maps.LatLng(item.place[0].location[0], item.place[0].location[1]);
// 	var add_marker = new google.maps.Marker({position: coordinates, map: map, title: item.place[0].name, icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'});
// 	add_marker.setMap(map);
// });


$('#restaurant_list').on('click', function(event) {
	console.log("click");
	$(event.target).parent().remove();
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



// // add day-btn
// $('#btn-add-day').on('click', function() {
// 	var dayNumber = $('#day-btn-list').children().length;
// 	dayNumber += 1;

// 	// create a new ".btn-day" button
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
