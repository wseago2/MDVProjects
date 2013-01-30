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
//						console.log(data);
						$.each(data.rows, function(index, event) {
							var item = (event.value || value.doc);
//								console.log(item);
							var docId = event.id;
//								console.log(docId);
							var docRev = event.value.rev;
								console.log(docRev);
								$('#myCouchData').append(
									$('<li>').append(
										$('<a>')
											.attr("href", "display.html?Events=" + docId + "&" + docRev)
											.text(item.name)
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
					for (var pair in urlPairs){
						var keyValue = urlPairs[pair].split('=');
						var key = decodeURIComponent(keyValue[0]);
						var value = decodeURIComponent(keyValue[1]);
						urlValues[key] = value;
					}
					return urlValues;
					console.log(urlValues);
			};
					$.couch.db("medtrackerproject").openDoc(urlVars, {
						success: function(data){
							$(' ' +
									'<li><p>Name: ' + data.name + '</p></li>' +
									'<li><p>Medication Name: ' + data.medname + '</p></li>' +
									'<li><p>Medication Type: ' + data.typename + '</p></li>' +
									'<li><p>Dosage: ' + data.dosage + '</p></li>' +
									'<li><p>Frequency: ' + data.frequency + '</P></li>' +
									'<li><p>Date: ' + data.date + '</p></li>' +
									'<li><p>Notes: ' + data.notes + '</p></li>' 
								).appendTo("#displayRecord");
							}
						});


//###################################################################################
// deleteItem function
//###################################################################################
			$("#deleteEvent").on("click", function(){
					deleteRecord();
			});

					var deleteRecord = function(){
						if (confirm("Are you sure you want to delete this event?"))
						{
							$.couch.db("medtrackerproject").removeDoc(urlValues(), {
								success: function(data){
									console.log(data);
								},
								error: function(status){
									console.log(status);
									}
								})
							alert("Event deleted!")
							
							}
					};

	});



//###########################################################################################
// storeData function
//###########################################################################################
		var storeData = function(){
				var item 				={};
					item.name  			= $("#name").val();
					item.medname 		= $("#medname").val();
					item.typename		= $("input:radio[name=type]:checked").val();
					item.dosage 		= $("#dosage").val();
					item.frequency   	= frequency.value; 
					item.date 	 		= $("#date").val();
					item.notes	 		= $("#notes").val();
						$.couch.db("medtrackerproject").saveDoc( 
							{
								name: item.name,
								medname: item.medname,
								typename: item.typename,
								dosage: item.dosage,
								frequency: item.frequency,
								date: item.date,
								notes: item.notes
							},
							{
							success: function(data){
								console.log(data);
								alert("Event Saved!")
							},
						});
						$.mobile.changePage("#displayCouch");
		};


