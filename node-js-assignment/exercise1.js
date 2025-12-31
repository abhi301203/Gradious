const fs = require('fs');
const path = require('path');

function getFileContent(file) {
  const filePath = path.join(__dirname, 'lib', file);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading ${file}:`, err.message);
      return;
    }

    console.log(`\n--- Content of ${file} ---`);
    console.log(data);
  });
}


getFileContent('readme.txt');
getFileContent('students.csv');
getFileContent('index.html');
