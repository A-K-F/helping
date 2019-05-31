'use strict';

var headers = {
	orig: {
		test:/pickup/i,
		position: undefined
	},
	dest: {
		test:/drop\soff/i,
		position: undefined
	},
	loadId: {
		test:/load\snumber/i,
		position: undefined
	}
};

var arrayOfThText = ['Pickup', 'Drop Off', 'Load Number'];

Object.keys(headers).forEach((keyName) => {
	var keyPosition = arrayOfThText.findIndex((element) => {
		return headers[keyName].test.test(element);
	});
	headers[keyName].position = keyPosition;
})


var arrayOfTrs = [
	['Phoenix', 'Fontana', '12345'],
	['Phoenix', 'Fontana', '12346'],
	['Phoenix', 'Fontana', '12347']
];

var tableContents = [];

arrayOfTrs.forEach((htmlTableRow) => {
	var parsedTableRow = {};
	Object.keys(headers).forEach((keyName) => {
		parsedTableRow[keyName] = htmlTableRow[headers[keyName].position];
	});
	tableContents.push(parsedTableRow);
})

console.log(tableContents);
