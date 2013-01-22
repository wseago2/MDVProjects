// Wesley Seago
// MIU Term 1210
// Project 1 
// Medicine Tracker

var json = {
	"medication1": {
		"name": ["Name:", "Chloe"],
		"medname": ["Medication Name:", "Tylenol"],
		"typename": ["Type:", "OTC"],
		"dosage": ["Dosage:", "1"],
		"frequency": ["Frequency:", "4 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Fever"]
	},
	"medication2": {
		"name": ["Name:", "Chloe"],
		"medname": ["Medication Name:", "Dimetapp"],
		"typename": ["Type:", "OTC"],
		"dosage": ["Dosage:", "1"],
		"frequency": ["Frequency:", "12 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Congestion"]
	},
	"medication3": {
		"name": ["Name:", "Chloe"],
		"medname": ["Medication Name:", "Augmentin"],
		"typename": ["Type:", "Prescription"],
		"dosage": ["Dosage:", "1"],
		"frequency": ["Frequency:", "12 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Ear Infection"]
	},
	"medication4": {
		"name": ["Name:", "Chloe"],
		"medname": ["Medication Name:", "Tobramycin"],
		"typename": ["Type:", "Prescription"],
		"dosage": ["Dosage:", "1"],
		"frequency": ["Frequency:", "12 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Conjunctivitis (Pink Eye) Drops"]
	},
	"medication5": {
		"name": ["Name:", "Wes"],
		"medname": ["Medication Name:", "Tylenol"],
		"typename": ["Type:", "OTC"],
		"dosage": ["Dosage:", "5"],
		"frequency": ["Frequency:", "4 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Fever"]
	},
	"medication6": {
		"name": ["Name:", "Wes"],
		"medname": ["Medication Name:", "Dayquil"],
		"typename": ["Type:", "OTC"],
		"dosage": ["Dosage:", "5"],
		"frequency": ["Frequency:", "4 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Common Cold"]
	},
	"medication7": {
		"name": ["Name:", "Wes"],
		"medname": ["Medication Name:", "Nyquil"],
		"typename": ["Type:", "OTC"],
		"dosage": ["Dosage:", "5"],
		"frequency": ["Frequency:", "4 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Common Cold"]
	},
	"medication8": {
		"name": ["Name:", "Wes"],
		"medname": ["Medication Name:", "Tylenol Sinus"],
		"typename": ["Type:", "OTC"],
		"dosage": ["Dosage:", "5"],
		"frequency": ["Frequency:", "6 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Sinus Pressure"]
	},
	"medication9": {
		"name": ["Name:", "Erin"],
		"medname": ["Medication Name:", "Imitrex"],
		"typename": ["Type:", "Prescription"],
		"dosage": ["Dosage:", "5"],
		"frequency": ["Frequency:", "12 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Migraine"]
	},
	"medication10": {
		"name": ["Name:", "Erin"],
		"medname": ["Medication Name:", "Pepto Bismol"],
		"typename": ["Type:", "OTC"],
		"dosage": ["Dosage:", "5"],
		"frequency": ["Frequency:", "4 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Upset Stomach"]
	},
	"medication11": {
		"name": ["Name:", "Erin"],
		"medname": ["Medication Name:", "Tylenol"],
		"typename": ["Type:", "OTC"],
		"dosage": ["Dosage:", "5"],
		"frequency": ["Frequency:", "4 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Fever"]
	},
	"medication12": {
		"name": ["Name:", "Erin"],
		"medname": ["Medication Name:", "Robitussin"],
		"typename": ["Type:", "OTC"],
		"dosage": ["Dosage:", "5"],
		"frequency": ["Frequency:", "4 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Cough"]
	},
	"medication13": {
		"name": ["Name:", "Meagan"],
		"medname": ["Medication Name:", "Tylenol"],
		"typename": ["Type:", "OTC"],
		"dosage": ["Dosage:", "3"],
		"frequency": ["Frequency:", "4 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Fever"]
	},
	"medication14": {
		"name": ["Name:", "Meagan"],
		"medname": ["Medication Name:", "Nyquil"],
		"typename": ["Type:", "OTC"],
		"dosage": ["Dosage:", "3"],
		"frequency": ["Frequency:", "4 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Cold"]
	},
	"medication15": {
		"name": ["Name:", "Meagan"],
		"medname": ["Medication Name:", "Tylenol Sinus"],
		"typename": ["Type:", "OTC"],
		"dosage": ["Dosage:", "3"],
		"frequency": ["Frequency:", "4 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Sinus Pressure"]
	},
	"medication16": {
		"name": ["Name:", "Meagan"],
		"medname": ["Medication Name:", "Tums"],
		"typename": ["Type:", "OTC"],
		"dosage": ["Dosage:", "2"],
		"frequency": ["Frequency:", "4 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Heartburn"]
	},
	"medication17": {
		"name": ["Name:", "Reagan"],
		"medname": ["Medication Name:", "Amoxicillin"],
		"typename": ["Type:", "Prescription"],
		"dosage": ["Dosage:", "2"],
		"frequency": ["Frequency:", "12 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Strep Throat"]
	},
	"medication18": {
		"name": ["Name:", "Reagan"],
		"medname": ["Medication Name:", "Robitussin"],
		"typename": ["Type:", "OTC"],
		"dosage": ["Dosage:", "2"],
		"frequency": ["Frequency:", "4 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Cough"]
	},
	"medication19": {
		"name": ["Name:", "Reagan"],
		"medname": ["Medication Name:", "Dimetapp"],
		"typename": ["Type:", "OTC"],
		"dosage": ["Dosage:", "2"],
		"frequency": ["Frequency:", "4 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Common Cold"]
	},
	"medication20": {
		"name": ["Name:", "Reagan"],
		"medname": ["Medication Name:", "Tylenol"],
		"typename": ["Type:", "OTC"],
		"dosage": ["Dosage:", "2"],
		"frequency": ["Frequency:", "4 Hours"],
		"date": ["Date:", "2012-9-18"],
		"notes": ["Notes:", "Fever"]
	}
}