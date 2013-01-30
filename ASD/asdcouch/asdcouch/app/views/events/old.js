function (doc){
	if (doc._id.substr(0, 1) === "0") {
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
	if (doc._id.substr(0, 1) === "1") {
		emit(doc._id, {
			"name": doc.name,
			"medname": doc.medname,
			"typename": doc.typename,
			"dosage": doc.dosage,
			"frequency": doc.frequency,
			"date": doc.date,
			"notes": doc.notes
		});
	};
	if (doc._id.substr(0, 1) === "2") {
		emit(doc._id, {
			"name": doc.name,
			"medname": doc.medname,
			"typename": doc.typename,
			"dosage": doc.dosage,
			"frequency": doc.frequency,
			"date": doc.date,
			"notes": doc.notes
		});
	};
	if (doc._id.substr(0, 1) === "3") {
		emit(doc._id, {
			"name": doc.name,
			"medname": doc.medname,
			"typename": doc.typename,
			"dosage": doc.dosage,
			"frequency": doc.frequency,
			"date": doc.date,
			"notes": doc.notes
		});
	};
	if (doc._id.substr(0, 1) === "4") {
		emit(doc._id, {
			"name": doc.name,
			"medname": doc.medname,
			"typename": doc.typename,
			"dosage": doc.dosage,
			"frequency": doc.frequency,
			"date": doc.date,
			"notes": doc.notes
		});
	};
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
	};
	if (doc._id.substr(0, 1) === "6") {
		emit(doc._id, {
			"name": doc.name,
			"medname": doc.medname,
			"typename": doc.typename,
			"dosage": doc.dosage,
			"frequency": doc.frequency,
			"date": doc.date,
			"notes": doc.notes
		});
	};
	if (doc._id.substr(0, 1) === "7") {
		emit(doc._id, {
			"name": doc.name,
			"medname": doc.medname,
			"typename": doc.typename,
			"dosage": doc.dosage,
			"frequency": doc.frequency,
			"date": doc.date,
			"notes": doc.notes
		});
	};
	if (doc._id.substr(0, 1) === "8") {
		emit(doc._id, {
			"name": doc.name,
			"medname": doc.medname,
			"typename": doc.typename,
			"dosage": doc.dosage,
			"frequency": doc.frequency,
			"date": doc.date,
			"notes": doc.notes
		});
	};
		if (doc._id.substr(0, 1) === "9") {
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