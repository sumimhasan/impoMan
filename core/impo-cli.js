#!/usr/bin/env node

const path = require('path');
const { loadConfig } = require('./config');
const { readFileContent, writeFileContent } = require('./file-utils');
const { scanAndInject } = require('./scanner');

// Load config from user's project (where command is run)
const config = loadConfig();

const targetFile = process.argv[2];
if (!targetFile) {
  console.error(' Please provide a file. Usage: node impo-cli.js <filename>');
  process.exit(1);
}

const absPath = path.resolve(targetFile);
const fileName = path.basename(targetFile);
const content = readFileContent(absPath);

const updated = scanAndInject(fileName, absPath, content, config);

if (updated.changed) {
  writeFileContent(absPath, updated.newContent);
  console.log(` Injected imports: ${updated.injected.join(', ')}`);
} else {
  console.log(` All dependencies already present.`);
}
