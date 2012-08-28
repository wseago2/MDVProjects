// Wesley Seago
// SDI Term 1208
// Assignment Project 4
// Javascript Library

// String Manipulation Library
// ***************************
function phoneNumberPattern (input) {
	var re = /^\(?(\d{3})\)?[\.\-\/]?(\d{3})[\.\-\/]?(\d{4})$/;
	return(re.test(input));
};

function emailPattern (input) {
	// code here ref textbook pg 191-202.
	// regular expressions.
	// setup regular expression params.
	// comment out if/else statement if only need boolean value.
	// same for other string regexp functions.
		var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
		//	if (re.test(input)===true) {
		//	console.log (input + " follows a pattern like an email address.");
		//} else {
		//	console.log (input + " does not follow a pattern like an email address.");
		//}
		return(re.test(input)); 
};

function urlPattern (input) {
	var re = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
	return (re.test(input));
};

function titleCaseString (input) {
	return input.replace(/\w\S*/g, function(change){return change.charAt(0).toUpperCase() + change.substr(1).toLowerCase();}); 
};

function stringChangeSeparator (input) {
	var text = input.replace(/[,-]/g,"/"); // /=begin re;[what to change (, or -)]; /g= change all; "/" what to change to.
	return (text);
};

// Number Manipulation Library
// ***************************
function formatDecimalPlaces (input) {
	var newNum = parseFloat(Math.round(input * 100) / 100).toFixed(2);
	return (newNum);
};

// Test phoneNumberPattern function.
console.log (phoneNumberPattern("1234567890"));
console.log (phoneNumberPattern("123456789"));

// Test emailPattern function.
console.log (emailPattern("wseago2@gmail.com"));
console.log (emailPattern("wseago"));

// Test urlPattern
console.log (urlPattern("http://www.google.com"))
console.log (urlPattern("google.com"));

//Test titleCaseString function.
console.log (titleCaseString("wesley g seago"));

// Test stringChangeSeparator function.
console.log (stringChangeSeparator("3,2,1"));
console.log (stringChangeSeparator("3-2-1"));

// Test formatDecimalPlaces
console.log (formatDecimalPlaces(23.657));
console.log (formatDecimalPlaces(4.987));

