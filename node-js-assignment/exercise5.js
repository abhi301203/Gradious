const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'lib', 'people.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }

  const lines = data.split('\n');
  const result = [];

  lines.forEach(line => {
    if (line.trim() === '') return;

    const parts = line.split('|').map(item => item.trim());

    const person = {
      name: parts[0],
      age: Number(parts[1]),
      gender: parts[2],
      city: parts[3]
    };

    result.push(person);
  });

  console.log(JSON.stringify(result, null, 2));
});
