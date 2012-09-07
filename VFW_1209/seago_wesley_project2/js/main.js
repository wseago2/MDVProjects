// Wesley Seago
// VFW Term 1209
// Project 2 
// Medicine Tracker

// Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function (){



	//getElementById Function
	function $ (x){
	var theElement = document.getElementById(x);
	return theElement;
	}

	// create select field element and populate options.

	function makeCats (){
		var formTag = document.getElementsByTagName("form"); //formTag is an array of all form tags.
			selectItem = $("select"),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "frequency");
		for(var i=0, j=frequencyGroups.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = frequencyGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectItem.appendChild(makeSelect);
	}

	function storeData(){
		var id 			= Math.floor(Math.random()*100000001);
		//Gather up all our form field values and store in an object.
		//Object properties contain an array with the form label and input data.
		var item 				={};
			item.name 			=["Name", $('name').value];
			item.medname 		=["Medication Name", $('medname').value];
			//item.typename		=["Type", typeValue];
			item.dosage 		=["Dosage", $('dosage').value];
			//item.frequency    =["Frequency", frequencyValue];
			item.date 	 		=["Date", $('date').value];
			item.notes	 		=["Notes", $('notes').value];

			//Save data into local storage: Use stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Information Saved!");
	}



	//Variable defaults
	var frequencyGroups = ["--Choose Frequency--", "4 Hours", "6 Hours", "8 Hours", "12 Hours", "24 Hours"];

	 makeCats();
/*
	//Set Link & Submit Click Elements
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);

	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
*/
	var save = $('submit');
	save.addEventListener("click", storeData);

});

