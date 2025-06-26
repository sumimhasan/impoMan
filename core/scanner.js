const path = require('path');
const { resolveImportPath, createImportLine } = require('./resolver');

function scanAndInject(fileName, absPath, content, config) {
  const aliases = config.aliases || {};
  const fileDir = path.dirname(absPath);

  const deps = new Set(config.defaults || []);
  if (config[fileName]) {
    for (const dep of config[fileName]) {
      deps.add(dep);
    }
  }

  const existingImports = [
    ...content.matchAll(/require\(['"`](.+?)['"`]\)/g)
  ].map(m => m[1]);

  const missing = [];
  const lines = [];

  for (const dep of deps) {
    const resolved = resolveImportPath(dep, fileDir, aliases);
    if (!existingImports.includes(resolved)) {
      lines.push(createImportLine(dep, resolved));
      missing.push(dep);
    }
  }

  if (lines.length === 0) {
    return { changed: false };
  }

  const newContent = `${lines.join('\n')}\n\n${content}`;
  return { changed: true, newContent, injected: missing };
}

module.exports = { scanAndInject };
