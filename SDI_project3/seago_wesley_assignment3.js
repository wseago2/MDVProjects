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
								"guide"    : true
							},
						
							"0002" : {
								"name"	   : "Hunchback Lou",
								"site"     : "castle",
								"level"	   : 10,
								"guide"    : true
							},

							"0003" : {
								"name"	   : "Riff Raff",
								"site"     : "monastery",
								"level"	   : 9,
								"guide"    : true
							}

			}
};
console.log (json); // test JSON data

// Global Variables
var hunter = {
	name   : "Wes",
	level  : 1,
	guide  : false,
	sites  : ["graveyard", "castle"],
	selectGuide : function () {},
	travelTo    : function (site) {},
	announce    : function () {},
	huntVampire : function () {},
	killVampire : function () {},
	prepare     : function () {}
}
//var pirate = {
//   realName:    "Jean Lafitte",
//    rank:        "Captain",
//    privateer:   true,
//    ships:       [ "La Diligent", "Pride" ],
//    sailTo:      function (destination) {},
//    getLocation: function () {}
//};






//console.log (currentHunter);


//var pirate = { /* stuff here */ },
//    ship   = { /* more stuff here */ },
//    target = "Tortuga";
//pirate.announce("Our target today is " + target + ".");
//var myName = pirate.getRealName();    // accessor method
//pirate.announce("We'll find plunder, or my name isn't " + myName + "!");
//pirate.sailTo(target);                // mutator + procedure method
//var damage = pirate.attack(target);   // function method
//pirate.repairDamage(damage, ship);    // object argument




	












