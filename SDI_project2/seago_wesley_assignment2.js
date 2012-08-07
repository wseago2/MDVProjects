// Wesley Seago
// SDI 1208
// Project 2
// Vampire Hunters



// declare global variables
var hunterName = "Wesley";
var readyToHunt;
var huntingSites = ["graveyard", "cave", "monestary", "crypts"];
var totalTime = 0;



// Procedure
function huntAlone ( x ) {
	if ( x >= 5) {
		console.log (hunterName + " is a vampire hunting pro, and can hunt on his own.")
	}
	else {
		console.log (hunterName + " is still new at vampire hunting and should go with a guide.")
	}
}



// Boolean Function
function qtyStakes  ( x ) {
	if ( x >=10 ) {
		console.log (hunterName + ", you are ready to go vampire hunting!")
		readyToHunt = true;
	}
	else {
		console.log (hunterName + ", you are not prepared to go vampire hunting!")
		readyToHunt = false;
	}
};




// String Function



// Array Function
function whereToHunt ( x,y ) {
 	for (var i=0; i < y; i++) {
		console.log ( hunterName  + " will hunt vampires in the " + huntingSites[i] + ".");
 	}
};



// Number Function

	

//Returned Values call fuctions
huntAlone (8);
qtyStakes (11);
console.log ("Is " + hunterName + " ready to hunt? " + readyToHunt)
whereToHunt ( huntingSites, huntingSites.length );


//Output