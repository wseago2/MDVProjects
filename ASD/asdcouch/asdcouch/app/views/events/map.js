function (doc){
	if (doc._id.substr(0, 1) === "5") {
		emit(doc._id, {
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