import path from "path";
import fs from "fs-extra";
import { NPM } from "../utils/npm";
import { buildLogger } from "../utils/logger";
import { ensurePath } from "../utils/ensurePath";
import { ensurePackageJSON } from "../utils/ensurePackageJSON";
import { readPackageJSON } from "../utils/readPackageJSON";

const JSON_SPACER = 2;

export default async function Update(pkg: string) {
  const workDir: string = process.env.INIT_CWD;

  if (pkg && !pkg.match(/^.+@/)) pkg = `${pkg}@latest`;
  const logger = buildLogger(`Installing${pkg ? ` ${pkg}` : ""}`);

  ensurePath(workDir, logger);
  ensurePackageJSON(workDir, logger);

  const packageFile = path.join(workDir, "package.json");
  let pkgJSONContents = readPackageJSON(packageFile);
  let plugins: string[] = pkgJSONContents?.grouparoo?.plugins;

  if (!plugins) {
    logger.fail("There is no `grouparoo` section in this package.json");
    process.exit(1);
  }

  if (pkg?.match("@grouparoo/ui-")) {
    const existingUIPackage = plugins.find((p) => p.match(/@grouparoo\/ui.*/));
    if (existingUIPackage) {
      logger.fail(
        "There is already a ui package in this project. Uninstall the existing ui package before adding another."
      );
      process.exit(1);
    }
  }

  await NPM.install(logger, workDir, pkg);

  // reload after npm install
  pkgJSONContents = readPackageJSON(packageFile);
  plugins = pkgJSONContents?.grouparoo?.plugins;

  if (pkg) {
    let cleanedPackageName =
      pkg.split("@").length === 3 ? "@" + pkg.split("@")[1] : pkg.split("@")[0];
    if (!plugins.includes(cleanedPackageName)) {
      plugins.push(cleanedPackageName);
      plugins.sort();
      fs.writeFileSync(
        packageFile,
        JSON.stringify(pkgJSONContents, null, JSON_SPACER)
      );
    }
  }

  logger.succeed(`Installed${pkg ? ` ${pkg}` : ""}!`);
}
