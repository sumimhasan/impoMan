const fs = require('fs');

function readFileContent(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

function writeFileContent(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf-8');
}

module.exports = { readFileContent, writeFileContent };
