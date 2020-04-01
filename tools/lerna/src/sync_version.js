const glob = require("glob");
const path = require("path");
const fs = require("fs");

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

function getLernaVersion() {
  return parseJsonFile(path.join(__dirname, "..", "..", "..", "lerna.json"))
    .version;
}

async function updateAllPkgVersions(vargs) {
  const lernaVersion = getLernaVersion();
  const pkgValue = `^${lernaVersion}`;
  log(vargs, 1, `Setting all to lerna version: ${pkgValue}`);

  const appPkgFiles = glob.sync(
    path.resolve(
      path.join(__dirname, "..", "..", "..", "apps", "*", "package.json")
    )
  );
  const pluginPkgFiles = glob.sync(
    path.resolve(
      path.join(
        __dirname,
        "..",
        "..",
        "..",
        "plugins",
        "*",
        "*",
        "package.json"
      )
    )
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
      log(vargs, 4, `${p}: writing file.`);
      const contents = JSON.stringify(data, null, 2);
      fs.writeFileSync(p, contents + "\r\n");
    }
  }
}
