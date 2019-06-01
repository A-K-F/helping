// USE AT https://www.w3schools.com/html/html_tables.asp

'use strict';

// GET TABLE NODE
var table5 = document.querySelectorAll('table')[5].querySelector('tbody');

// EXTRACT TABLE HEADERS
var tableHeadRowData = Object.values(table5.querySelectorAll('th')).map((cell) => {return cell.innerText;});

console.log('--------------------');
console.log('tableHeadRowData');
console.log(tableHeadRowData);
console.log('--------------------');

// EXTRACT TABLE DATA FROM NODES
var tableRowData = Object.values(table5.querySelectorAll('tr')).reduce((accumuator, row) => {
	if (!!row.querySelector('th')) {return accumuator}
	accumuator.push(Object.values(row.querySelectorAll('td')).map((cell) => {return cell.innerText;}));
	return accumuator;
}, []);

console.log('tableRowData');
console.log(tableRowData);
console.log('--------------------');

var headers = {
	desc: {
		test:/description/i,
		position: undefined
	},
	tag: {
		test:/tag/i,
		position: undefined
	}
};

// GET POSITION OF THE DESIRED HEADERS
Object.keys(headers).forEach((keyName) => {
	var keyPosition = tableHeadRowData.findIndex((element) => {
		return headers[keyName].test.test(element);
	});
	headers[keyName].position = keyPosition;
})

// PARSE ROW ARRAYS INTO OBJECTS
var tableContents = tableRowData.map((htmlTableRow) => {
	var parsedTableRow = {};
	Object.keys(headers).forEach((keyName) => {
		parsedTableRow[keyName] = htmlTableRow[headers[keyName].position];
	});
	return parsedTableRow;
})

console.log(tableContents);
