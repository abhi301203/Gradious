const fs = require('fs');
const path = require('path');

const outputFile = path.join(__dirname, 'random-words.txt');
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateRandomWord(length) {
  let word = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    word += characters[randomIndex];
  }
  return word;
}

let words = [];

for (let i = 0; i < 100; i++) {
  words.push(generateRandomWord(10));
}

fs.writeFile(outputFile, words.join('\n'), (err) => {
  if (err) {
    console.error('Error writing file:', err.message);
    return;
  }
  console.log('random-words.txt created successfully with 100 words');
});
