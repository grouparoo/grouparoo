const glob = require("glob");
const path = require("path");
const fs = require("fs");
const execSync = require("../../shared/exec");

module.exports.cmd = async function (vargs) {
  await updateAllPkgVersions(vargs);
};

function log(vargs, level, ...toLog) {
  const wanted = vargs.verbose || 0;
  if (wanted >= level) {
    console.log(...toLog);
  }
}

function parseJsonFile(path) {
  let data = fs.readFileSync(path);
  return JSON.parse(data);
}

async function updateAllPkgVersions(vargs) {
  const rootPath = path.join(__dirname, "..", "..", "..");

  const lernaVersion = parseJsonFile(path.join(rootPath, "lerna.json")).version;
  const pkgValue = `^${lernaVersion}`;
  log(vargs, 1, `Setting all to lerna version: ${pkgValue}`);

  const appPkgFiles = glob.sync(
    path.join(rootPath, "apps", "*", "package.json")
  );
  const pluginPkgFiles = glob.sync(
    path.join(rootPath, "plugins", "*", "*", "package.json")
  );
  const pkgFiles = [].concat(appPkgFiles, pluginPkgFiles);

  for (const p of pkgFiles) {
    let changed = false;
    const data = parseJsonFile(p);
    if (lernaVersion !== data.version) {
      log(vargs, 1, `${p} version: changed ${data.version} -> ${lernaVersion}`);
      data.version = lernaVersion;
      changed = true;
    } else {
      log(vargs, 2, `${p} version: already ${data.version}`);
    }

    ["dependencies", "peerDependencies", "devDependencies"].map(
      (collection) => {
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
      }
    );

    if (changed) {
      const root = path.resolve(path.join());
      log(vargs, 4, `${p}: writing file.`);
      const contents = JSON.stringify(data, null, 2);
      fs.writeFileSync(p, contents + "\r\n");

      const pCmd = path.join(
        rootPath,
        "tools",
        "lerna",
        "node_modules",
        ".bin",
        "prettier"
      );
      const pConfig = path.join(rootPath, ".prettierrc");
      await execSync(`'${pCmd}' --config '${pConfig}' --write '${p}'`);
    }
  }
}
