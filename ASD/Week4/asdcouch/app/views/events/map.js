function (doc){
		if (doc._id.substr(0, 6) != "_design") {
		emit(doc._id, {
		    "docId": doc._id,
		    "docRev": doc._rev,
			"name": doc.name,
			"medname": doc.medname,
			"typename": doc.typename,
			"dosage": doc.dosage,
			"frequency": doc.frequency,
			"date": doc.date,
			"notes": doc.notes
		});
	}
};