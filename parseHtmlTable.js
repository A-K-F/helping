// USE AT https://www.w3schools.com/html/html_tables.asp

'use strict';

var table5 = document.querySelectorAll('table')[5].querySelector('tbody');

var tableHeadRow = table5.querySelectorAll('th');

var tableHeadRowData = []

tableHeadRow.forEach((cell) => {tableHeadRowData.push(cell.innerText);});

console.log('--------------------');
console.log('tableHeadRowData');
console.log(tableHeadRowData);
console.log('--------------------');

var tableRows = table5.querySelectorAll('tr');

console.log('tableRows');
console.log(tableRows);
console.log('--------------------');

var tableRowData = [];

tableRows.forEach((row) => {
	if (!!row.querySelector('th')) {return;}
	var rowData = [];
	row.querySelectorAll('td').forEach((cell) => {rowData.push(cell.innerText);});
	tableRowData.push(rowData);
})

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

// VAR TO RECEIVE PARSED CONTENTS OF TABLE
var tableContents = [];

// PARSE EACH ROW
tableRowData.forEach((htmlTableRow) => {
	var parsedTableRow = {};
	Object.keys(headers).forEach((keyName) => {
		parsedTableRow[keyName] = htmlTableRow[headers[keyName].position];
	});
	tableContents.push(parsedTableRow);
})

console.log(tableContents);
