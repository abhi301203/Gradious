const xlsx = require('xlsx');
const path = require('path');

const excelFilePath = path.join(__dirname, 'lib', 'marks.xlsx');

const workbook = xlsx.readFile(excelFilePath);

const sheetName = workbook.SheetNames[0];

const worksheet = workbook.Sheets[sheetName];

const jsonData = xlsx.utils.sheet_to_json(worksheet);

console.log(JSON.stringify(jsonData, null, 2));
