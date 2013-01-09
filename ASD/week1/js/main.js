// Wesley Seago
// ASD Term 1301
// Med Tracker

//###########################################################################################
//home Page
//###########################################################################################
$('#home').on('pageinit', function(){
	
});

//###########################################################################################
//addItem Page
//###########################################################################################			
$('#addItem').on('pageinit', function(){
		delete $.validator.methods.date; //Remove Date Validation
		var myForm = $("#addItemForm"); //Call JQ Validator
			   	myForm.validate({
				invalidHandler: function(form, validator) {},
				submitHandler: function() {
					var data = myForm.serializeArray();
					storeData(data);
				}
		});
});

//###########################################################################################
//displayItems Page
//###########################################################################################
$('#displayItems').on('pageinit', function(){
	alert("The displayItems page was initialized");	
});

//###########################################################################################
// displayLink Button
//###########################################################################################
	$('#displayLink').on("click", function(){
		$('#events').empty();
			displayEvents();
			});

//###########################################################################################
// Clear Local Storage Button
//###########################################################################################
$("#clear").on("click", function(){
		if(localStorage.length === 0){
		alert("There is no data to clear.");
		}else{
			localStorage.clear();
			alert("All data has been cleared!");
				}				
		});

//###########################################################################################
// autoFillData function
//###########################################################################################
var autoFillData = function(){
	 		for (var n in json){
				var id = Math.floor(Math.random()*100000001);
				localStorage.setItem(id, JSON.stringify(json[n]));
				}
			};	

//###########################################################################################
// storeData function
//###########################################################################################
var storeData = function(key){
			if (!key){
				alert("Creating a key.");
				var id = Math.floor(Math.random()*100000001);
			}else{
				alert("Using the existing key.");
				id = key;
				}
				var item 				={};
					item.name  			=["Name: ", $("#name").val()];
					item.medname 		=["Medication Name: ", $("#medname").val()];
					item.typename		=["Type: ", $("input:radio[name=type]:checked").val()];
					item.dosage 		=["Dosage: ", $("#dosage").val()];
					item.frequency   	=["Frequency: ", frequency.value]; 
					item.date 	 		=["Date: ", $("#date").val()];
					item.notes	 		=["Notes: ", $("#notes").val()];
						localStorage.setItem(id, JSON.stringify(item));
						alert("Information Saved!");
						window.location.reload();


		};

//###########################################################################################
// displayEvents function
//###########################################################################################
var displayEvents = function (){
	if(localStorage.length === 0){
		alert("There is no Data in Local Storage, so Default Data was Added.");
		autoFillData();
	}else{
		alert("Local Storage Contains Data");
		$.mobile.changePage("#displayItems");
		var makeEventList = $('<ul>');
			//give the ul an id so I can clear it without clearing the entire page.
			//if I use .empty on the page I will lose navigation.
			makeEventList.attr("id", "events");
			makeEventList.appendTo('#displayItems');
				for (var i=0, len=localStorage.length; i<len; i++){
					var makeEventRecord = $('<li>');
					var lineBreak = $('<br><br>');
					makeEventRecord.appendTo(makeEventList);
					var key = localStorage.key(i);
					var value = localStorage.getItem(key);
					var obj = JSON.parse(value);
						var makeSubList = $('<ul>');
						makeSubList.appendTo(makeEventRecord);
							var editLink = $("<button>");
							var editText = "Edit Event";
							var deleteLink = $("<button>");
							var deleteText = " Delete Event";
							editLink.attr("href", "#addItem");
							deleteLink.attr("href", "#displayItems");
							editLink.text(editText);
							deleteLink.text(deleteText);
								editLink.on("click", editItem);
								deleteLink.on("click", deleteItem);
							editLink.appendTo(makeEventRecord);
							deleteLink.appendTo(makeEventRecord);
							lineBreak.appendTo(makeEventRecord);
								for (var n in obj){
									var makeSubLi = $('<li>');
									makeSubLi.appendTo(makeSubList);
									var optSubText = obj[n][0]+" "+obj[n][1];
									makeSubLi.text(optSubText);

				}
										
			}

		}
};

	

//###########################################################################################
// makeItemLinks function
//###########################################################################################		

/*
function makeItemLinks(key, makeSubLi){
		var editLink = $("<a>");
		editLink.attr("href", "#addItem");
		editLink.attr("key", key);
		var editText = "Edit Event";
		editLink.on("click", editItem);
		editLink.text(editText);
		editLink.appendTo(makeSubLi);
			var breakTag = $("<br>");
			breakTag.appendTo(makeSubLi);
		var deleteLink = $("<a>");
		deleteLink.attr("href", "#addItem");
		deleteLink.attr("key", key);
		var deleteText = "Delete Event";
		deleteLink.on("click", deleteItem);
		deleteLink.text(deleteText);
		deleteLink.appendTo(makeSubLi);
};
*/


//###########################################################################################
// editItem function
//###########################################################################################

function editItem(){
			alert("The editItem function has fired.");
			var value = localStorage.getItem(this.key);
			var item = JSON.parse(value);
			alert(item);
//			var value = localStorage.getItem(this.key);
			var thiskey = $(this).attr("key");
//			var value = localStorage.getItem($(this).attr("key"));
//			var item = JSON.parse(value);
				//Populate the form fields with current local storage values.
		 	$('name').val(item.name[1]);
			$("medname").val = (item.medname[1]);
			//Take out radios until fixed.
			//	var radios = document.forms[0].type;
			//	for (var i=0; i<radios.length; i++){
			//		if (radios[i].value == "OTC" && item.typename[1] == "OverTheCounter"){
			//			radios[i].setAttribute("checked", "checked");
			//		}else if(radios[i].value == "Prescription" && item.typename[1] == "Prescription"){
			//			radios[i].setAttribute("checked", "checked");
			//		}
			//	}
			$("dosage").val = (item.dosage[1]);
			$("frequency").val = (item.frequency[1]);
			$("date").val = (item.date[1]);
			$("notes").val = (item.notes[1]);
		
			var editSubmit = $("submit")
			$("submit").val("Edit Event");
		//Save key value established in this function as a property of the editSubmit event
		//so we can use that value when we save the data that we edited.
				editSubmit.on("click", storeData);
				editSubmit.key = this.key;
				return;
			};


//###########################################################################################
// deleteItem function
//###########################################################################################

function deleteItem(){
	var ask = confirm("Are you sure you want to delete this event?");
		if (ask){
			localStorage.removeItem(this.key);
			alert("Event Deleted.");
			$.mobile.changePage("#addItem");
		}else{
			alert("Event was NOT Deleted.");
		}
		return false;
};





//					"id": items,
//					"data-role": "collapsible",
//					"data-collapsed": "true",
//					"data-inset": "true",
//					"data-theme": "b"
//					.appendTo('#display');





//});









