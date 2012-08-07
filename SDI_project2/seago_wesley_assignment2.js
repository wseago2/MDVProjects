// Wesley Seago
// SDI 1208
// Project 2
// Vampire Hunters

// alert("JavaScript works!");

// declare global variables
var hunterName = "Wesley";
var nightsHunting = 8;
var typeProtection = "crucifix";
var readyToHunt;
var huntingSites = ["graveyard", "cave", "monestary", "crypts"];
var minutesSpentHunting = [120, 60, 240, 120];
var totalTime = 0;



// Procedure
if (nightsHunting >= 5) {
	console.log (hunterName + " is a vampire hunting pro, and can hunt on his own.")
}
else {
	console.log (hunterName + " is still new at vampire hunting and should go with a guide.")
};



// Boolean Function
function qtyStakes  ( x ) {
	if ( x >=5 ) {
		console.log (hunterName + ", you are ready to go vampire hunting!")
		readyToHunt = true;
	}
	else {
		console.log (hunterName + ", you are not prepared to go vampire hunting!")
		readyToHunt = false;
	}
}

qtyStakes (3);

// Check readyToHunt is being assigned properly
//console.log (readyToHunt);



// String Function



// Array Function
for (var i=0, j=huntingSites.length; i < j; i++) {
	console.log ( hunterName  + " will hunt vampires in the " + huntingSites[i] + " for " + minutesSpentHunting[i] + " minutes." );
};



// Number Function

	

//Returned Values call fuctions
qtyStakes (10);


//Output