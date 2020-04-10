const glob = require("glob");
const path = require("path");
const fs = require("fs");
const execSync = require("../../shared/exec");
const { appPackageFiles } = require("../../shared/packages");

const rootPath = path.resolve(path.join(__dirname, "..", "..", ".."));
const toolPath = path.resolve(path.join(rootPath, "tools", "lerna"));

module.exports.cmd = async function (vargs) {
  await updateAllPkgVersions(vargs);
  await updateMarkdown(vargs);
};

function log(vargs, level, ...toLog) {
  const wanted = vargs.verbose || 0;
  if (wanted >= level) {
    console.log(...toLog);
  }
}

function parseJsonFile(path) {
  const data = fs.readFileSync(path);
  return JSON.parse(data);
}

function getLernaVersion() {
  return parseJsonFile(path.join(rootPath, "lerna.json")).version;
}

async function prettierFormat(filePath) {
  const pCmd = path.join(toolPath, "node_modules", ".bin", "prettier");
  const pConfig = path.join(rootPath, ".prettierrc");
  await execSync(`'${pCmd}' --config '${pConfig}' --write '${filePath}'`);
}

async function updatePkgMarkdown(vargs, filePath, blockKey) {
  const readmeContents = fs.readFileSync(filePath).toString();
  const lernaVersion = getLernaVersion();
  const jsonPath = path.join(toolPath, "data", `${blockKey}.json`);
  await updatePkgVersions(vargs, jsonPath, lernaVersion, lernaVersion);
  const jsonContents = fs.readFileSync(jsonPath).toString();

  // assumes it's the first of these blocks in current README
  const startBlock = "```json:" + blockKey;
  const startIndex = readmeContents.indexOf(startBlock);
  if (startIndex < 0) {
    throw `Markdown content for json not found: ${startBlock}`;
  }
  const startLineEnd = readmeContents.indexOf("\n", startIndex);
  const beforeContent = readmeContents.slice(0, startLineEnd + 1);

  const endBlock = "```";
  const endIndex = readmeContents.indexOf(endBlock, startLineEnd);
  const endContent = readmeContents.slice(endIndex);

  // put together new file
  const newContent = beforeContent + jsonContents + endContent;
  if (newContent !== readmeContents) {
    log(vargs, 1, `Updating ${filePath} ${blockKey} -> ${lernaVersion}`);
    fs.writeFileSync(filePath, newContent);
    await prettierFormat(filePath);
  }
}

async function updateMarkdown(vargs) {
  const startPath = path.join(
    rootPath,
    "documents",
    "deployment",
    "getting-started.md"
  );
  await updatePkgMarkdown(vargs, startPath, "readme_deploy");

  const pluginsPath = path.join(
    rootPath,
    "documents",
    "development",
    "plugins.md"
  );
  await updatePkgMarkdown(vargs, pluginsPath, "plugins_package");
  await updatePkgMarkdown(vargs, pluginsPath, "plugins_example");
}

async function updatePkgVersions(vargs, p, lernaVersion, pkgValue) {
  let changed = false;
  const data = parseJsonFile(p);
  if (lernaVersion !== data.version) {
    log(vargs, 1, `${p} version: changed ${data.version} -> ${lernaVersion}`);
    data.version = lernaVersion;
    changed = true;
  } else {
    log(vargs, 2, `${p} version: already ${data.version}`);
  }

  ["dependencies", "peerDependencies", "devDependencies"].map((collection) => {
    for (name in data[collection]) {
      const label = `${p} ${collection} | ${name}`;
      if (name.match(/^@grouparoo/)) {
        if (pkgValue !== data[collection][name]) {
          log(
            vargs,
            1,
            `${label}: changed ${data[collection][name]} -> ${pkgValue}`
          );
          data[collection][name] = pkgValue;
          changed = true;
        } else {
          log(vargs, 2, `${label}: already ${data[collection][name]}`);
        }
      } else {
        log(vargs, 4, `${label}: not grouparoo`);
      }
    }
  });

  if (changed) {
    const root = path.resolve(path.join());
    log(vargs, 4, `${p}: writing file.`);
    const contents = JSON.stringify(data, null, 2);
    fs.writeFileSync(p, contents);
    await prettierFormat(p);
  }
}

async function updateAllPkgVersions(vargs) {
  const lernaVersion = getLernaVersion();
  const pkgValue = `^${lernaVersion}`;
  log(vargs, 1, `Setting all to lerna version: ${lernaVersion}`);

  const packageFiles = appPackageFiles(glob);

  for (const p of packageFiles) {
    await updatePkgVersions(vargs, p, lernaVersion, pkgValue);
  }
}
