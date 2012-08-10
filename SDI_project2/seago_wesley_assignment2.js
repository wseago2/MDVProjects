// Wesley Seago
// SDI 1208
// Project 2
// Vampire Hunters



// declare global variables
var hunterName = "Wes";
var readyToHunt = qtyStakes(11);
var huntingSites = ["graveyard", "cave", "crypts", "castle"];
var finalDecision = guideDecision("Wes", "Hunchback Lou")
var payPerVampire = 250;

huntingSites.push("monastery");




// Procedure enough experience to hunt alone?
function huntAlone ( x ) {
	if ( x >= 5) {
		console.log (hunterName + " is a vampire hunting pro, and can hunt on his own.")
	}
	else {
		console.log (hunterName + " is still new at vampire hunting and should go with a guide.")
	}
};



// String Function
function guideDecision ( x,y ) {
	var decision;
	decision = x + ", you can have " + y + " go with you to show you the hunting grounds if you like.";
	return decision;
};



// Boolean Function 
function qtyStakes  ( x ) {
	var goodToGo;
	if ( x >=10 ) {
		goodToGo = true;
	}
	else {
		goodToGo = false;
	}
	return goodToGo;
};



// Array Function
function whereToHunt ( x,y ) {
 	for (var i=0; i < y; i++) {
		console.log ( hunterName  + " will hunt vampires in the " + huntingSites[i] + ".");
 	}
};



// Number Function
function killsNeeded ( x ) {
	var y = 0;
	while ( x > 0 ) {
		console.log (hunterName + " you need to kill " + x + " more vampires this week in order to meet your goal.");
		x--; y++
		console.log (hunterName + " you have earned " + y * payPerVampire + " dollars this week!");
	}
	return y;
};
		
	


	

// Returned Values Output
huntAlone (8);
console.log ( hunterName + ", do you have enough stakes to go hunting vampires?");
console.log(readyToHunt);
console.log(finalDecision);
whereToHunt ( huntingSites, huntingSites.length );
console.log(killsNeeded (1000 / payPerVampire));


