// Wesley Seago
// MIU Term 1210
// Gold Project 3
// Medicine Tracker

$('#home').on('pageinit', function(){
//code needed for home page goes here
});	
		
//Call JQM Validator	
$("#addItem").on('pageinit', function(){
		//Remove Date Validation
		delete $.validator.methods.date;
		var myForm = $("#addItemForm");
			   myForm.validate({
			invalidHandler: function(form, validator) {

			},
			submitHandler: function() {
				var data = myForm.serializeArray();
				storeData(data);
			}
		});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

//Get Element by ID Function
function ge(x){
	var theElement = document.getElementById(x);
	return theElement;
};

var	getData=function(){
		if (localStorage.length === 0){
			alert("There is no data in Local Storage, so default data was added.");
			autoFillData();
			window.location.reload();
		}else{
		toggleControls("on");
		//Write Data from local storage to the browser.
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("data-role", "page");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		ge("items").style.display = "block";
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
//----------Remove images for now.
//			getImage(obj.typename[1], makeSubList);
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
	};

function makeItemLinks(key, linksLi){
		
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

	};

function editItem(){
	//grab the data from our item from local storage.
	var value = localStorage.getItem(this.key);
	var item = JSON.parse(value);
	//Show the form
	toggleControls("off");
	//Populate the form fields with current local storage values.
	ge("name").value = item.name[1];
	ge("medname").value = item.medname[1];
//Take out radios until fixed.
//	var radios = document.forms[0].type;
//	for (var i=0; i<radios.length; i++){
//		if (radios[i].value == "OTC" && item.typename[1] == "OverTheCounter"){
//			radios[i].setAttribute("checked", "checked");
//		}else if(radios[i].value == "Prescription" && item.typename[1] == "Prescription"){
//			radios[i].setAttribute("checked", "checked");
//		}
//	}
	ge("dosage").value = item.dosage[1];
//	ge("frequency").value = item.frequency[1];
	ge("date").value = item.date[1];
	ge("notes").value = item.notes[1];
	//Remove the initial listener from the input 'add medication' button.
	save.removeEventListener("click", storeData);
	//change submit button value to edit button
	var editSubmit = ge("submit")
//	ge("submit").value = "Edit Event";
	//Save key value established in this function as a property of the editSubmit event
	//so we can use that value when we save the data that we edited.
	editSubmit.addEventListener("click", storeData);
	editSubmit.key = this.key;
};

function toggleControls(n){
	switch(n){
		case "on":
			ge("addItemForm").style.display = "none";
			ge("clear").style.display = "inline";
			ge("displayLink").style.display = "none";
			ge("submit").style.display = "inline";
			break;
		case "off":
			ge("addItemForm").style.display = "block";
			ge("clear").style.display = "inline";
			ge("displayLink").style.display = "inline";
			ge("submit").style.display = "inline";//changed from none to inline
			ge("items").style.display = "none";//changed from none to inline
			break;
		default:
			return false;
	}
};

var storeData = function(key){
		if(!key){
		var id = Math.floor(Math.random()*100000001);
		}else{
			id = key;
		}
//----------getSelectedRadio();
//----------getFrequency();
		var item 				={};
			item.name  			=["Name: ", ge("name").value];
			item.medname 		=["Medication Name: ", ge("medname").value];
			item.typename		=["Type: ", typeValue];
			item.dosage 		=["Dosage: ", ge("dosage").value];
			item.frequency   	=["Frequency: ", frequency.value]; 
			item.date 	 		=["Date: ", ge("date").value];
			item.notes	 		=["Notes: ", ge("notes").value];
		localStorage.setItem(id, JSON.stringify(item));
		alert("Information Saved!");
		window.location.reload();
};

var autoFillData = function (){
	 for (var n in json){
		var id = Math.floor(Math.random()*100000001);
		localStorage.setItem(id, JSON.stringify(json[n]));
	}
};

//Get image for the correct category.
//function getImage(catName, makeSubList){
//	var imageLi = document.createElement("li");
//	makeSubList.appendChild(imageLi);
//	var newImg = document.createElement("img");
//	var setSrc = newImg.setAttribute("src", "img/"+ catName + ".png");
//	imageLi.appendChild(newImg);
//};

// Find value of selected radio button.
//	var getSelectedRadio = function(){
	//var radios = document.forms[0].type;
	//for (var i=0; i<radios.length; i++){
	//	if(radios[i].checked){
	//		typeValue = radios[i].value;
	//	}
	//}
//};

//Find value of selected frequency.
//function getFrequency(){
//	var thisFrequency = document.forms[0].select;
//	for (var i=0; i<frequencyGroups.length; i++){
//		if(frequencyGroups[i].selected){
//			frequencyValue = frequencyGroups[i].value;
//		}
//	}
//};
					
var clearLocal = function(){
	if(localStorage.length === 0){
			alert("There is no data to clear.");
		}else{
			localStorage.clear();
			alert("All data has been cleared!");
			window.location.reload();
			return;
		}
};

var	deleteItem = function (){
		var ask = confirm("Are you sure you want to delete this event?");
		if (ask){
			localStorage.removeItem(this.key);
			alert("Event deleted.");
			window.location.reload();
		}else{
			alert("Event was NOT deleted.")
		}	
};	

var displayLink = ge("displayLink");
	displayLink.addEventListener("click", getData);

var clearLink = ge("clear");
	clearLink.addEventListener("click", clearLocal);

//var save = ge("submit");
//	save.addEventListener("click", storeData);

var typeValue;




