// Wesley Seago
// SDI 1208
// Project 2
// Vampire Hunters

// alert("JavaScript works!");

// declare global variables
var hunterName = "Wesley";
var nightsHunting = 8;
var qtyStakes = 10;
var typeProtection = "garlic";
var readyToHunt;
var huntingSites = ["graveyard", "cave", "monestary", "crypts"];
var minutesSpentHunting = [120, 60, 240, 120];


// Procedure
if (nightsHunting >= 5) {
	console.log (hunterName + " is a vampire hunting pro, and can hunt on his own.")
}
else {
	console.log (hunterName + " is still new at vampire hunting and should go with a guide.")
};

// Boolean Function

if (qtyStakes >=5 && typeProtection === "crucifix") {
	console.log (hunterName + ", you are ready to go vampire hunting!")
	readyToHunt = true;
}
else {
	console.log (hunterName + ", you are not prepared to go vampire hunting!")
	readyToHunt = false;
}

console.log (readyToHunt);

// Number Function

// String Function

// Array Function

//Returned Values

//Output