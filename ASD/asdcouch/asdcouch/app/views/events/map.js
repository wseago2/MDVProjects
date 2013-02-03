function (doc){
		if (doc._id.substr(0, 6) != "_design") {
		emit(doc._id, {
			"key": doc._id,
			"rev": doc._rev,
			"name": doc.name,
			"medname": doc.medname,
			"dosage": doc.dosage,
			"frequency": doc.frequency,
			"date": doc.date,
			"notes": doc.notes
		});
	}
};