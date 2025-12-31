const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'lib', 'debug.log');

function getFormattedTimestamp() {
  const now = new Date();

  const date = now.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  const time = now.toLocaleTimeString('en-US');

  return `${date} ${time}`;
}

fs.readFile(logFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading log file:', err.message);
    return;
  }

  const lines = data.split('\n');

  const updatedLines = lines.map(line => {
    if (line.trim() === '') return line;
    return `${getFormattedTimestamp()} ${line}`;
  });

  fs.writeFile(logFilePath, updatedLines.join('\n'), (err) => {
    if (err) {
      console.error('Error writing log file:', err.message);
      return;
    }
    console.log('Timestamp added to each log entry successfully');
  });
});
