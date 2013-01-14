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

		//####################################################################################
		// displayLink Button
		//####################################################################################
		$('#displayLink').on("click", function(){
			displayEvents();
		});

		//####################################################################################
		// Clear Local Storage Button
		//####################################################################################
		$("#clear").on("click", function(){
			if(localStorage.length === 0){
				alert("There is no data to clear.");
			}else{
				localStorage.clear();
				alert("All data has been cleared!");
				}				
		});
});

//###########################################################################################
//loadData Page
//###########################################################################################
$('#loadData').on('pageinit', function(){
	
});

//###########################################################################################
//displayItems Page
//###########################################################################################
$('#displayItems').on('pageinit', function(){
			
});

//###########################################################################################
// storeData function
//###########################################################################################
	var storeData = function(key){
			alert(key);
//Using existing key even when a new key should be assigned.
//This is a result of the key being wrapped in jQuery and turned into an object.
//Gotta get this solved to move forward with edit and delete links.
//			if (!key){
//				alert("Creating a key.");
				var id = Math.floor(Math.random()*100000001);
//			}else{
//				alert("Using the existing key.");
//				id = key;
//				key = id;
//				}
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

//###################################################################################
// displayEvents function
//###################################################################################
		var displayEvents = function (){
			$('.events').remove();
			if(localStorage.length === 0){
				alert("There is no Data in Local Storage, so Default Data was Added.");
				autoFillData();
			}else{
				alert("Local Storage Contains Data");
				$.mobile.changePage("#displayItems");
				var makeEventList = $('<ul>');
					makeEventList.attr("id", "events");
					makeEventList.attr("class", "events");
					makeEventList.appendTo("#eventDisplay");
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
								editLink.attr("key", key);
							var editText = "Edit This Event";
							var deleteLink = $("<button>");
								deleteLink.attr("key", key);
							var deleteText = "Delete This Event";
							editLink.attr("href", "#addItem");
							deleteLink.attr("href", "#displayItems");
							editLink.text(editText);
							deleteLink.text(deleteText);
							editLink.appendTo(makeEventRecord);
							deleteLink.appendTo(makeEventRecord);
							lineBreak.appendTo(makeEventRecord);
								for (var n in obj){
									var makeSubLi = $('<li>');
									makeSubLi.appendTo(makeSubList);
									var optSubText = obj[n][0]+" "+obj[n][1];
									makeSubLi.text(optSubText);
									}
								editLink.on("click", editItem);
								deleteLink.on("click", deleteItem);				
							}
				}			
			};

//###########################################################################################
// autoFillData function
//###########################################################################################
		var autoFillData = function(){
	 		for (var n in json){
				var id = Math.floor(Math.random()*100000001);
				localStorage.setItem(id, JSON.stringify(json[n]));
				}
		};

//###################################################################################
// editItem function
//###################################################################################
	var editItem = function(){
			var currentKey = $(this).attr("key");
			var value = localStorage.getItem($(this).attr("key"));
		alert("currentKey = "+currentKey);
		alert("value = "+value);
			var item = JSON.parse(value);
				//Populate the form fields with current local storage values.
		 	$('#name').val(item.name[1]);
			$('#medname').val(item.medname[1]);
			$('#typename').val(item.typename[1]);
			$('#dosage').val(item.dosage[1]);
			$('#frequency').val(item.frequency[1]);
			$('#date').val(item.date[1]);
			$('#notes').val(item.notes[1]);
			$.mobile.changePage("#addItem");
			localStorage.removeItem(currentKey);
			//Save key value established in this function as a property of the editSubmit event
			//so we can use that value when we save the data that we edited.
//				submit.on("click", storeData);
//				editSubmit.key = this.key;
				
	};

//###################################################################################
// deleteItem function
//###################################################################################
	var deleteItem = function(){
			var currentKey = $(this).attr("key");
			var ask = confirm("Are you sure you want to delete this event?");
				if (ask){
					localStorage.removeItem(currentKey);
					alert("Event Deleted.");
					$.mobile.changePage("#addItem");
				}else{
					alert("Event was NOT Deleted.");
			}
		};














