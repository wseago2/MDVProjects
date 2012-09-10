// Wesley Seago
// VFW Term 1209
// Project 2 
// Medicine Tracker

// Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function () {

	//getElementById Function
	function $(x){
	var theElement = document.getElementById(x);
	return theElement;
	}

	// create select field element and populate options.
	function makeCats (){
		var formTag = document.getElementsByTagName("form"), //formTag is an array of all form tags.
			selectItem = $("select"),
			makeSelect = document.createElement("select");
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

	//Find value of selected radio button.
	function getSelectedRadio(){
		var radios = document.forms[0].type;
		for (var i=0; i<radios.length; i++){
			if(radios[i].checked){
				typeValue = radios[i].id;
			}
		}
	}

	//Find value of selected frequency.
	function getFrequency(){
		var thisFrequency = document.forms[0].select;
		for (var i=0; i<frequencyGroups.length; i++){
			if(frequencyGroups[i].selected){
				frequencyValue = frequencyGroups[i].value;
			}
		}
	}

	function toggleControls(n){
		switch(n){
			case "on":
				$("medForm").style.display = "none";
				$("clear").style.display = "inline";
				$("displayLink").style.display = "none";
				$("addNew").style.display = "inline";
				break;
			case "off":
				$("medForm").style.display = "block";
				$("clear").style.display = "inline";
				$("displayLink").style.display = "inline";
				$("addNew").style.display = "none";
				$("item").style.display = "none";
				break;
			default:
				return false;
		}
	}

	function storeData(){
		var id = Math.floor(Math.random()*100000001);
		//Gather up all our form field values and store in an object.
		//Object properties contain an array with the form label and input data.
		//Save data into local storage: Use stringify to convert our object to a string.
		getSelectedRadio();
		getFrequency();
		console.log(frequency.value);
		var item 				={};
			item.name  			=["Name: ", $("name").value];
			item.medname 		=["Medication Name: ", $("medname").value];
			item.typename		=["Type: ", typeValue];
			item.dosage 		=["Dosage: ", $("dosage").value];
			item.frequency   	=["Frequency: ", frequency.value]; //These will be added with JQuery.
			item.date 	 		=["Date: ", $("date").value];
			item.notes	 		=["Notes: ", $("notes").value];
		localStorage.setItem(id, JSON.stringify(item));
		alert("Information Saved!");
	}

	function getData(){
		if (localStorage.length === 0){
			alert("There is no data stored.");
		}else{
		toggleControls("on");
		//Write Data from local storage to the browser.
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$("items").style.display = "block";
		for(var i=0, len=localStorage.length; i<len; i++){
			var makeli = document.createElement("li");
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//Convert string from local storage value back to an object with JSON parse.
			var obj = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeli.appendChild(makeSubList);
			for(var n in obj){
				var makeSubLi = document.createElement("li");
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubLi.innerHTML = optSubText;
				}
			}
		}
	}

	function clearLocal(){
		if(localStorage.length === 0){
			alert("There is no data to clear.");
		}else{
			localStorage.clear();
			alert("All data has been cleared!");
			window.location.reload();
			return;
		}
	}

	//Declare Default Global Variables
	var frequencyGroups = ["--Choose Frequency--", "4 Hours", "6 Hours", "8 Hours", "12 Hours", "24 Hours"];
	var typeValue;
	var frequencyValue;
	
	//Run Function to populate frequency select options.
	makeCats();

	//Set Link & Submit Click Elements
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);

	var clearLink = $("clear");
	clearLink.addEventListener("click", clearLocal);

	var save = $("submit");
	save.addEventListener("click", storeData);

});

