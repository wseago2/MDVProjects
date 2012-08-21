// Wesley Seago
// SDI Term 1208
// Assignment Project 4
// Javascript Library



// String Manipulation Library

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
	var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // MAKEUP: proper use of escape character, project 1.
		//	if (re.test(input)===true) {
		//	console.log (input + " follows a pattern like an email address.");
		//} else {
		//	console.log (input + " does not follow a pattern like an email address.");
		//}
		return(re.test(input)); // MAKEUP: missing output in boolean function, project 2.
};



function urlPattern (input) {
	var re = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
	return (re.test(input));
};



function titleCaseString () {
	//code here
	return { };
}



function stringChangeSeparator () {
	//code here
	return { };
}



// Number Manipulation Library

function formatDecimalPlaces () {
	//code here
	return { };
}



function fuzzyMatch () {
	//code here
	return { };
}



function hoursDaysBetween () {
	//code here
	return { };
}



function stringToNumber () {
	//code here
	return { };
}



// Array Manipulation Library

function smallestGreaterThan () {
	//code here
	return { };
}



function totalNumberValue () {
	//code here
	return { };
}



function arraySortedByKeyValue () {
	//code here
	return { };
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
