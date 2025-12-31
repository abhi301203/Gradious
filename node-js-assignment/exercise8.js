const xlsx = require('xlsx');
const path = require('path');

const users = [
  { name: 'Anand', age: 22, gender: 0, city: 'Mumbai' },
  { name: 'Bihu', age: 17, gender: 1, city: 'Pune' },
  { name: 'Ravi', age: 25, gender: 0, city: 'Hyderabad' }
];

const worksheet = xlsx.utils.json_to_sheet(users);

const workbook = xlsx.utils.book_new();

xlsx.utils.book_append_sheet(workbook, worksheet, 'Users');

const outputPath = path.join(__dirname, 'users.xlsx');

xlsx.writeFile(workbook, outputPath);

console.log('users.xlsx created successfully');
