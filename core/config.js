const fs = require('fs');
const path = require('path');

function loadConfig() {
  const configPath = path.join(process.cwd(), 'dependency.json');
  if (!fs.existsSync(configPath)) {
    console.error(' dependency.json not found in current project.');
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
}

module.exports = { loadConfig };
