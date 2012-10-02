// Wesley Seago
// MIU Term 1210
// Project 1
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
				typeValue = radios[i].value;
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
				$("items").style.display = "none";
				break;
			default:
				return false;
		}
	}

	function storeData(key){
		//if  no key, then brand new item and needs new key.
		if(!key){
		var id = Math.floor(Math.random()*100000001);
		}else{
			//Set the id to the existing key we are editing so that it will save over the data.
			//The key is the same key that's been passed along from the editSubmit event handler
			//to the validate function, and then passed here, into the storeData function.
			id = key;
		}
		//Gather up all our form field values and store in an object.
		//Object properties contain an array with the form label and input data.
		//Save data into local storage: Use stringify to convert our object to a string.
		getSelectedRadio();
		getFrequency();
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
			alert("There is no data in Local Storage, so default data was added.");
			autoFillData();
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
			var linksLi = document.createElement("li");
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//Convert string from local storage value back to an object with JSON parse.
			var obj = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeli.appendChild(makeSubList);
			getImage(obj.typename[1], makeSubList);
			for(var n in obj){
				var makeSubLi = document.createElement("li");
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubLi.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
				}
			makeItemLinks(localStorage.key(i), linksLi); //Create edit and delete links for each item in local storage.
			}
		}
	}

	//Get image for the correct category.
	function getImage(catName, makeSubList){
		var imageLi = document.createElement("li");
		makeSubList.appendChild(imageLi);
		var newImg = document.createElement("img");
		var setSrc = newImg.setAttribute("src", "img/"+ catName + ".png");
		imageLi.appendChild(newImg);
	}

//Auto Populate Local Storage
function autoFillData(){
	//The actual JSON OBJECT required for this to work is coming from the json.js file.
	//Store the JSON OBJECT into Local Storage.
	for (var n in json){
		var id = Math.floor(Math.random()*100000001);
		localStorage.setItem(id, JSON.stringify(json[n]));
	}
}

	//Make item links.
	//Create the edit and delete links for each stored item when displayed.
		function makeItemLinks(key, linksLi){
			//add edit single item link.
			var editLink = document.createElement("a");
			editLink.href = "#";
			editLink.key = key;
			var editText = "Edit Event";
			editLink.addEventListener("click", editItem);
			editLink.innerHTML = editText;
			linksLi.appendChild(editLink);

			//add line break.
			var breakTag = document.createElement("br");
			linksLi.appendChild(breakTag);

			//add delete single item link.
			var deleteLink = document.createElement("a");
			deleteLink.href = "#";
			deleteLink.key = key;
			var deleteText = "Delete Event";
			deleteLink.addEventListener("click", deleteItem);
			deleteLink.innerHTML = deleteText;
			linksLi.appendChild(deleteLink);
		}
	//Edit single item
	function editItem(){
		//grab the data from our item from local storage.
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);

		//Show the form
		toggleControls("off");

		//Populate the form fields with current local storage values.
		$("name").value = item.name[1];
		$("medname").value = item.medname[1];
		var radios = document.forms[0].type;
		for (var i=0; i<radios.length; i++){
			if (radios[i].value == "Over the Counter" && item.typename[1] == "Over the Counter"){
				radios[i].setAttribute("checked", "checked");
			}else if(radios[i].value == "Prescription" && item.typename[1] == "Prescription"){
				radios[i].setAttribute("checked", "checked");
			}
		}
		$("dosage").value = item.dosage[1];
		$("frequency").value = item.frequency[1];
		$("date").value = item.date[1];
		$("notes").value = item.notes[1];

		//Remove the initial listener from the input 'save contact' button.
		save.removeEventListener("click", storeData);
		//change submit button value to edit button
		$("submit").value = "Edit Event";
		var editSubmit = $("submit")
		//Save key value established in this function as a property of the editSubmit event
		//so we can use that value when we save the data that we edited.
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
	}

	function deleteItem(){
		var ask = confirm("Are you sure you want to delete this event?");
		if (ask){
			localStorage.removeItem(this.key);
			alert("Event deleted.");
			window.location.reload();
		}else{
			alert("Event was NOT deleted.")
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

	function validate(e){
		//Define elements we want to check.
		var getName = $("name");
		var getMedname = $("medname");
		var getFrequency = $("frequency");
		var getDate = $("date");

		//Reset error messages.
		errMsg.innerHTML = "";
		getName.style.border 		= "1px solid black";
		getMedname.style.border 	= "1px solid black";
		getFrequency.style.border 	= "1px solid black";
		getDate.style.border 		= "1px solid black";


		//Get error messages.
		var messageAry = [];

		//name validation
		if (getName.value === ""){
			var nameError = "Please enter a name.";
			getName.style.border = "1px solid red";
			messageAry.push(nameError);
		}

		//medname validation
		if (getMedname.value === ""){
			var mednameError = "Please enter medication name.";
			getMedname.style.border = "1px solid red";
			messageAry.push(mednameError);
		}

		//Frequency Validation
		if(getFrequency.value=="--Choose Frequency--"){
			var frequencyError = "Please choose frequency.";
			getFrequency.style.border = "1px solid red";
			messageAry.push(frequencyError);
		}

		//Date validation
		if (getDate.value === ""){
			var dateError = "Please enter a date.";
			getDate.style.border = "1px solid red";
			messageAry.push(dateError);
		}

		//If there were errors display them on the screen.
		if(messageAry.length >= 1){
			for(var i=0, j=messageAry.length; i<j; i++){
				var txt = document.createElement("li");
				txt.innerHTML = messageAry[i];
				errMsg.appendChild(txt);
			}
			e.preventDefault();
			return false;
		}else{
			//If all is OK, save data. Send key value (which came from edit data function).
			//This key value was passed through the editSubmit event listener as a property.
			storeData(this.key);
		}
	
	}

	//Declare Default Global Variables
	var frequencyGroups = ["--Choose Frequency--", "4 Hours", "6 Hours", "8 Hours", "12 Hours", "24 Hours"];
	var typeValue;
	var frequencyValue;
	errMsg = $("errors");
	
	//Run Function to populate frequency select options.xq
	makeCats();

	//Set Link & Submit Click Elements
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);

	var clearLink = $("clear");
	clearLink.addEventListener("click", clearLocal);

	var save = $("submit");
	save.addEventListener("click", validate);

});

