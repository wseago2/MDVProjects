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
	kills:       0,
	qtyStakes:   7,
	needGuide:   true,
	backpack:    ["stake", "holy water"],
	location:    "camp",
	travelTo:    function (destination) {
		"use strict"; 
		wes.location = destination;
		return destination;
	},
	getLocation: function () {
		"use strict";
		console.log ("I am currently at the " + wes.location + ".");
	},
	huntVampire: function () {
		"use strict";
		wes.level++;
		return wes.level;
	},
	killVampire: function () {
		"use strict";
		wes.kills++;
		wes.qtyStakes--;
		return wes.kills;
	},
	findItem: function (item) {
		"use strict";
		wes.backpack.push(item);
		return wes.backpack;
		
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
}

while ( wes.qtyStakes < stakesNeeded ) {
	console.log ("Making a stake.");
	wes.qtyStakes++;
	console.log ("Wes now has " + wes.qtyStakes + " stakes.");
}

if ( wes.needGuide === true ) {
	console.log ( "Since " + wes.name + " is new at vampire hunting, we will send him with a guide.");
	} else { console.log ( wes.name + " has enough experience to hunt alone now." );
}

if ( wes.needGuide === true ) {
	for ( var i = 0; i < guides.length; i++) {
		console.log ( wes.name + ", say hello to " + guides[i] + "!" );
	}
};

console.log ( "You may choose any of these guides.");
console.log ( "Choosing " + guides[0] + " was a smart move!");

if (guides[1] === "Riff Raff") {
	console.log ("What kind of name is Riff Raff?");
}
console.log ( "How could anyone trust a guy with a name like " + guides[1] + "?");
console.log ("Now that we are prepared to hunt, we will head over to the first hunting site.");

//returns
console.log ("Today, we will hunt at the " + wes.travelTo (json.huntingSites["0001"].name) + ".");
console.log ("This does not look familiar. Let me check the map!");
wes.getLocation ();

console.log (wes.name + " found a silver crucifix while hunting." + " Backpack inventory is now " + wes.findItem ("silver crucifix"));

console.log (wes.name + " hunted vampires until he reached level "+ wes.huntVampire () + " before he got to participate.");

console.log ("Finally he got to kill a vampire, bringing his total kills to " + wes.killVampire () + "!");





















	












