const fs = require('fs');
const path = require('path');


const users = [
  { name: 'Anand', age: 22, gender: 0, city: 'Mumbai' },
  { name: 'Bihu', age: 17, gender: 1, city: 'Pune' },
  { name: 'Ravi', age: 25, gender: 0, city: 'Hyderabad' }
];


const outputFile = path.join(__dirname, 'users-info.txt');


const lines = users.map(user => {
  return `${user.name} | ${user.age} | ${user.gender} | ${user.city}`;
});


fs.writeFile(outputFile, lines.join('\n'), (err) => {
  if (err) {
    console.error('Error writing file:', err.message);
    return;
  }
  console.log('users-info.txt created successfully');
});
