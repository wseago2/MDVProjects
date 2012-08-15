// alert("JavaScript works!");
// Wesley Seago
// SDI term 1208
// Project 3
// 8/14/2012



// JSON data
var json = {
				"guides": {
							"0001" : {
								"name"	   : "Eyegore",
								"site"     : "graveyard",
								"level"	   : 7,
								"guide"    : false
							},
						
							"0002" : {
								"name"	   : "Hunchback Lou",
								"site"     : "castle",
								"level"	   : 10,
								"guide"    : false
							},

							"0003" : {
								"name"	   : "Riff Raff",
								"site"     : "monastery",
								"level"	   : 9,
								"guide"    : false
							}

			}
};


// Global Variables
var stakesNeeded = 10;
var qtyStakes;


// Functions
function hunter(name, nickname, stakes, level, guide) {
	this.name     = name;
	this.nickname = nickname;
	this.stakes   = stakes;
	this.level    = level;
	this.guide    = guide;
}

var wes = new hunter ("Wes Seago", "Wes", 7, 1, true);

console.log (wes.name + " is our newest vampire hunter!");
console.log ("He has " + wes.stakes + " stakes in his backpack.");
console.log (wes.nickname + " is only a beginner, so his level is " + wes.level + ".");
console.log ("All new hunters should have 10 stakes in their backpack before each hunting trip.");

qtyStakes = (wes.stakes);


// argument:number // math // property:string
function prepare (stakes) {
	var stakesToMake = (stakesNeeded - stakes);
	if (stakesNeeded <=qtyStakes) {
		console.log (wes.nickname + " has enough stakes to go hunting.")
	} else {
		console.log (wes.nickname + " needs to make " + (stakesNeeded - qtyStakes) + " stakes.");
		wes.stakes = 10;
		console.log (wes.nickname + " has made enough stakes to go hunting!")
	}
};















prepare (qtyStakes);
	












