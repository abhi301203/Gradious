const fs = require('fs');
const path = require('path');

function copyFile(sourceFile, newFile) {
  const sourcePath = path.join(__dirname, sourceFile);
  const destinationPath = path.join(__dirname, newFile);

  fs.copyFile(sourcePath, destinationPath, (err) => {
    if (err) {
      console.error('Error copying file:', err.message);
      return;
    }
    console.log(`${sourceFile} copied successfully to ${newFile}`);
  });
}


copyFile('random-words.txt', 'random-words-copy.txt');
