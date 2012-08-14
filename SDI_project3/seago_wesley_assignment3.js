// alert("JavaScript works!");
// Wesley Seago
// SDI term 1208
// Project 3
// 8/14/2012

// local variables
// returned values
// output
// conditional
// nested conditional
// while loop
// for loop
// math
// back
// argument: boolean
// argument: array
// argument: number
// argument: string
// argument: object


// declare global variables
var huntingSites = ["graveyard", "cave", "monastery", "castle"];
var stakesRequired = 10;
var makeStakes;



// json data...contains object hunters. Each property as an array with 6 keys.
var json = { 
    "hunters"   : {
		              "0001"	: {				
								  "firstName"  : "Wes",
								  "lastName"   : "Seago",
								  "hunts"      : 11,
								  "kills"      : 5,
                                  "stakes"     : 7
								},
           				
                	   "0002"   : { 
                				  "firstName"  : "Hunchback",
                				  "lastName"   : "Lou",
                				  "hunts"      : 107,
                				  "kills"      : 73,
                                  "stakes"     : 3
                				},

                		"0003"	: { 
                				  "firstName"  : "Riff",
                				  "lastName"   : "Raff",
                				  "hunts"      : 88,
                				  "kills"	   : 71,
                                  "stakes"     : 2
                				}
                	}
             };
// check to see if json works
// console.log (json);

// property: boolean (return boolean)

function prepare () {
    var haveStakes = ( json.hunters["0001"].stakes );
    var needStakes = (stakesRequired - haveStakes);
   
    if ( haveStakes >= 10) {
        console.log ("We have enough stakes to go hunting!")
    } else {
        console.log ("We need to make " + needStakes + " stakes to go hunting!")
    }

}

// property: array (return array)


// property: number (return number)


// property: string (return string)


// property object (return object)



// method: procedure


// method: function


// method: accessor
// check qty of stakes player has

// method: mutator
// update qty of stakes player has


// prepare ();
