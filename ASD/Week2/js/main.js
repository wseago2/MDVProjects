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

//*********************************
//load json function
//*********************************
	$('#loadjson').on("click", function(){
		$(".events").remove();
		$(".eventHeader").remove();
		var makeEventHeader = $('<h2 class="eventHeader">JSON Data</h2>');
		makeEventHeader.appendTo('#eventHeader');
		$.ajax({
			url: 'xhr/data.json',
			type: 'GET',
			dataType: 'json',
			success: function(json){
				console.log(json);
				for(var i = 0, j = json.data.length; i < j; i++){
					var myJson = json.data[i];
					$(' ' +
						'<ul class="events">' +
							'<li> Name: ' + myJson.name + '</li>' +
							'<li> Medication Name: ' + myJson.medname + '</li>' +
							'<li> Medication Type: ' + myJson.typename + '</li>' +
							'<li> Dosage: ' + myJson.dosage + '</li>' +
							'<li> Frequency: ' + myJson.frequency + '</li>' +
							'<li> Date: ' + myJson.date + '</li>' +
							'<li> Notes: ' + myJson.notes + '</li>' +
						'</ul>'
						).appendTo('#eventDisplay');
				}
					$.mobile.changePage('#displayItems');
			}
		});
		
	});

//*********************************
//load xml function
//*********************************
	$("#loadxml").on("click", function(){
		$(".events").remove();
		$(".eventHeader").remove();
		var makeEventHeader = $('<h2 class="eventHeader">XML Data</h2>');
		makeEventHeader.appendTo('#eventHeader');
		$.ajax({
			url: 'xhr/data.xml',
			type: 'GET',
			dataType: 'xml',
			success: function(xml){
				console.log(xml);
				$(xml).find('event').each(function(){
					var myXml = {};
					myXml.name = $(this).find('name').text();
					myXml.medname = $(this).find('medname').text();
					myXml.typename = $(this).find('typename').text();
					myXml.dosage = $(this).find('dosage').text();
					myXml.frequency = $(this).find('frequency').text();
					myXml.date = $(this).find('date').text();
					myXml.notes = $(this).find('notes').text();
						$(' '+
							'<ul class="events">'+
								'<li>'+ 'Name: ' + myXml.name +'</li>'+
								'<li>'+ 'Medication Name: ' + myXml.medname +'</li>'+
								'<li>'+ 'Medication Type: ' + myXml.typename +'</li>'+
								'<li>'+ 'Dosage: ' + myXml.dosage +'</li>'+
								'<li>'+ 'Frequency: ' + myXml.frequency +'</li>'+
								'<li>'+ 'Date: ' + myXml.date +'</li>'+
								'<li>'+ 'Notes: ' + myXml.notes +'</li>'+
							'</ul>'
						).appendTo('#eventDisplay');
				});
			$.mobile.changePage('#displayItems');
			}
		});
	});
//*********************************
//load csv function
//*********************************

	$("#loadcsv").on("click", function(){
		$(".events").remove();
		$(".eventHeader").remove();
		var makeEventHeader = $('<h2 class="eventHeader">CSV Data</h2>');
		makeEventHeader.appendTo('#eventHeader');
		$.ajax({
			url: 'xhr/data.csv',
			type: 'GET',
			dataType: 'text',
			success: function(csv){
				console.log(csv);
				var myCsv = csv.split("\n");
				for (var i = 0; i < myCsv.length; i++){
					var row = myCsv[i];
					var columns = row.split(",");
					$(''+
						'<ul class="events">'+
							'<li>' + 'Name: ' + columns[0] + '</li>'+
							'<li>' + 'Medication Name: ' + columns[1] + '</li>'+
							'<li>' + 'Medication Type: ' + columns[2] + '</li>'+
							'<li>' + 'Dosage: ' + columns[3] + '</li>'+
							'<li>' + 'Frequency: ' + columns[4] + '</li>'+
							'<li>' + 'Date: ' + columns[5] + '</li>'+
							'<li>' + 'Notes: ' + columns[6] + '</li>'+
						'</ul>'
						).appendTo('#eventDisplay');
				}
				$.mobile.changePage('#displayItems');
			}
		});
	});

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
				var id = Math.floor(Math.random()*100000001);
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
						$("#addItemForm").empty();
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
			var item = JSON.parse(value);
		 	$('#name').val(item.name[1]);
			$('#medname').val(item.medname[1]);
			$('#typename').val(item.typename[1]);
			$('#dosage').val(item.dosage[1]);
			$('#frequency').val(item.frequency[1]);
			$('#date').val(item.date[1]);
			$('#notes').val(item.notes[1]);
			$.mobile.changePage("#addItem");
			localStorage.removeItem(currentKey);
//I still need to change the submit button to say edit, create a hidden button called cancel
//and have it unhide here, and hide the display data and clear data buttons while editing.

				
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
