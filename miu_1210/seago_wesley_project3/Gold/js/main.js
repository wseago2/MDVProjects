// Wesley Seago
// MIU Term 1210
// Gold Project 3
// Medicine Tracker



$('#home').on('pageinit', function(){

});
	
//Call JQM Validator	
	$("#addItem").on('pageinit', function(){
			//Remove Date Validation
			//delete $.validator.methods.date;
			var myForm = $("#addItemForm");
			    myForm.validate({
				invalidHandler: function(form, validator) {

				},
				submitHandler: function() {
					var data = myForm.serializeArray();
					storeData(data);
			}
		});
	});

//Get Element by ID Function
	function ge(x){
		var theElement = document.getElementById(x);
		return theElement;
	};

//Store Data Function
	function storeData(key){
		if(!key){
		var id = Math.floor(Math.random()*100000001);
		}else{
			id = key;
		}
		getSelectedRadio();
		//getFrequency();
		var item 				={};
			item.name  			=["Name: ", ge("name").value];
			item.medname 		=["Medication Name: ", ge("medname").value];
			item.typename		=["Type: ", typeValue];
			item.dosage 		=["Dosage: ", ge("dosage").value];
			//item.frequency   	=["Frequency: ", frequency.value]; 
			item.date 	 		=["Date: ", ge("date").value];
			item.notes	 		=["Notes: ", ge("notes").value];
		localStorage.setItem(id, JSON.stringify(item));
		alert("Information Saved!");
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

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var	getData=function(){
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

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};

var typeValue;
