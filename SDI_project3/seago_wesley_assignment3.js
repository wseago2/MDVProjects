// alert("JavaScript works!");
// Wesley Seago
// SDI term 1208
// Project 3
// 8/14/2012



// JSON data
var json = {
				"huntingSites": {
							"0001" : {
								"name"	   : "Graveyard",
								"site"     : "graveyard",
								"level"	   : 1,
								"guided"   : true
							},
						
							"0002" : {
								"name"	   : "Castle",
								"site"     : "castle",
								"level"	   : 2,
								"guided"   : true
							},

							"0003" : {
								"name"	   : "Cave",
								"site"     : "cave",
								"level"	   : 3,
								"guided"   : true
							}				
								
			}
};


// Global Variables
var stakesNeeded = 10;
var qtyStakes;
var availableSites = [json.huntingSites["0001"].name, json.huntingSites["0002"].name, json.huntingSites["0003"].name];
// console.log (availableSites); test JSON access.
var hunterLocation;


var wes = {
	name:        "Wes",
	level:       1,
	qtyStakes:   7,
	needGuide:   true,
	weapon:      ["knife", "bow"],
	location:    "camp",
	travelTo:    function (destination) {
		wes.location = destination
	},
	getLocation: function (location) {
		console.log (wes.location);
	}
};

// console.log (wes); // check object.
// console.log (wes.location); // ahow starting location.
// wes.travelTo (json.huntingSites["0003"].site); // method procedure.
// console.log (wes.location); // check does travelTo method work.

wes.getLocation (wes.location);
















	












