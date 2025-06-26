const path = require('path');

function resolveImportPath(dep, fileDir, aliases) {
  for (const alias in aliases) {
    if (dep.startsWith(alias)) {
      const localPath = dep.replace(alias, aliases[alias]);
      const relPath = './' + path.relative(fileDir, path.resolve(localPath)).replace(/\\/g, '/');
      return relPath;
    }
  }
  return dep;
}

function createImportLine(dep, resolvedPath) {
  const variableName = path.basename(dep).replace(/\W/g, '');
  return `const ${variableName} = require('${resolvedPath}');`;
}

module.exports = { resolveImportPath, createImportLine };
