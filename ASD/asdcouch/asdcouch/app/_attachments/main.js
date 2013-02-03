// Wesley Seago
// ASD Term 1301
// Med Tracker

//home page
	$('#home').on('pageinit', function(){
		
	});

//addItem page		
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

//displayCouch page
    $('#displayCouch').live("pageshow", function(){
			$('#couchDisplay').empty();
			var makeDiv = $('<ul id="myCouchData" data-role="listview" data-inset="true"></ul>');
			makeDiv.appendTo('#couchDisplay');
			$.couch.db("medtrackerproject").view("asdproject/events", {
					success: function(data) {
						console.log(data);
						$.each(data.rows, function(index, event){
							var docId = event.value.key;
							var docRev = event.value.rev;
							var name = event.value.name;
								$('#myCouchData').append(
									$('<li>').append(
										$('<a>')
											.attr("href", "display.html?Events=" + docId + "&docRev=" + docRev)
											.text(name)
								)
						);					
				});
					$('#myCouchData').listview();
			}
		});
});


// display.html page
	$('#displayEvents').live("pageshow", function(){
			var urlVars = function(){
					var urlData = $($.mobile.activePage).data("url");
					var urlParts = urlData.split('?');
					var urlPairs = urlParts[1].split('&');
					var urlValues = {};
					for (var pair in urlPairs) {
						var keyValue = urlPairs[pair].split('=');
						var key = decodeURIComponent(keyValue[0]);
						var value = decodeURIComponent(keyValue[1]);
						urlValues[key] = value;
						}
					return urlValues;	
				};
					var decodedKey = urlVars()["Events"];
					var decodedRev = urlVars()["docRev"];			
					$.couch.db("medtrackerproject").openDoc(decodedKey, {
						success: function(data){
							$(' ' +
									'<li><p>Name: ' + data.name + '</p></li>' +
									'<li><p>Medication Name: ' + data.medname + '</p></li>' +
									'<li><p>Dosage: ' + data.dosage + '</p></li>' +
									'<li><p>Frequency: ' + data.frequency + '</P></li>' +
									'<li><p>Date: ' + data.date + '</p></li>' +
									'<li><p>Notes: ' + data.notes + '</p></li>' 
								).appendTo("#displayRecord");
						},
							error: function(status){
								console.log(status);
							}
					});
							
					


//deleteEvent function
			$("#deleteEvent").on("click", function(){
					if (confirm("Are you sure you want to delete this event?"))
						{
							alert("Event deleted!");
							var doc = {
										_id:decodedKey,
										_rev:decodedRev
									};
							$.couch.db("medtrackerproject").removeDoc(doc, {
								success: function(data){
									$.mobile.changePage("index.html#displayCouch");
								},
								error: function(status){
									console.log(status);
								}
							});
						} else {
								alert("Event was not deleted!");
								}	
			});

//editEvent function
			$("#editEvent").on("click", function(){
					$.couch.db("medtrackerproject").openDoc(decodedKey, {
						success: function(data){
								$('#editname').val(data.name);
								$('#editmedname').val(data.medname);
								$('#editdosage').val(data.dosage);
								$('#editfrequency').val(data.frequency);
								$('#editdate').val(data.date);
								$('#editnotes').val(data.notes);
						}
					});
					$.mobile.changePage('edit.html');
				});


			$('#editPage').live("pageshow", function(){
						$("#saveChanges").on("click", function(){
							var doc = {
    									_id: decodedKey,
    									_rev: decodedRev,
    									name: editname.value,
    									medname: editmedname.value,
    									dosage: editdosage.value,
    									frequency: editfrequency.value,
    									date: editdate.value,
    									notes: editnotes.value
										};
						console.log(doc);
						$.couch.db("medtrackerproject").saveDoc(doc, {
  						success: function(data) {
  							alert("Event was updated!");
  							$.mobile.changePage("index.html#displayCouch");
    						console.log(data); 						
  						},
    					error: function(status) {
       					 	console.log(status);
   						}
					});
						
				});
			});
	});

//###########################################################################################
// storeData function
//###########################################################################################
		var storeData = function(){
				var item 				={};
					item.name  			= $("#name").val();
					item.medname 		= $("#medname").val();
					item.dosage 		= $("#dosage").val();
					item.frequency   	= frequency.value; 
					item.date 	 		= $("#date").val();
					item.notes	 		= $("#notes").val();
						$.couch.db("medtrackerproject").saveDoc( 
							{
								name: item.name,
								medname: item.medname,
								dosage: item.dosage,
								frequency: item.frequency,
								date: item.date,
								notes: item.notes
							},
							{
							success: function(data){
								console.log(data);
								alert("Event Saved!");
								$("#addItemForm")[0].reset();
							}
						});
						$.mobile.changePage("#displayCouch");
		};


