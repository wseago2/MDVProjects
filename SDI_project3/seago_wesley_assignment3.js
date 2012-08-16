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
var availableSites = [json.huntingSites["0001"].name, json.huntingSites["0002"].name, json.huntingSites["0003"].name];
// console.log (availableSites); test JSON access.
var hunterLocation;
var guides = ["Hunchback Lou", "Riff Raff", "Eyegore"];
// console.log (availableSites); test JSON access.

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
		console.log ("I am currently at the " + wes.location);
	}
};



// console.log (wes); // check object.
// console.log (wes.location); // ahow starting location.
// wes.travelTo (json.huntingSites["0003"].site); // method procedure.
// console.log (wes.location); // check does travelTo method work.

// wes.getLocation (wes.location); // check does getLocation method work.
console.log ("Our newest vampire hunter is " + wes.name + ".");
console.log ("Before we can go vampire hunting, we must prepare.");
console.log ("When hunting in a new site, we must be sure to bring " + stakesNeeded + " stakes with us.");

if ( wes.qtyStakes >= stakesNeeded ) {
	console.log ( wes.name + " has enough stakes and is prepared to hunt.");
	} else { console.log ( wes.name + " is short " + (stakesNeeded - wes.qtyStakes) + " stakes, and needs to prepare for the next hunt." );
};

while ( wes.qtyStakes < stakesNeeded ) {
	console.log ("Making a stake.");
	wes.qtyStakes++;
	console.log ("Wes now has " + wes.qtyStakes + " stakes.");
}

if ( wes.needGuide == true ) {
	console.log ( "Since " + wes.name + " is new at vampire hunting, we will send him with a guide.");
	} else { console.log ( wes.name + " has enough experience to hunt alone now." );
};


console.log ("Now that we are prepared to hunt, we will head over to the first hunting site.");














	












