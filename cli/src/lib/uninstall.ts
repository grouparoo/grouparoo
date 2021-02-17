import path from "path";
import fs from "fs-extra";
import { NPM } from "../utils/npm";
import { buildLogger } from "../utils/logger";
import { ensurePath } from "../utils/ensurePath";
import { ensurePackageJSON } from "../utils/ensurePackageJSON";
import { readPackageJSON } from "../utils/readPackageJSON";
import { JSONUtils } from "../utils/JSONUtils";

export default async function Update(pkg: string) {
  const workDir: string = process.env.INIT_CWD;

  const logger = buildLogger(`Uninstalling${pkg ? ` ${pkg}` : ""}`);

  ensurePath(workDir, logger);
  ensurePackageJSON(workDir, logger);

  const packageFile = path.join(workDir, "package.json");
  let pkgJSONContents = readPackageJSON(packageFile);
  const dependencies: { [key: string]: string } = pkgJSONContents.dependencies;
  if (!Object.keys(dependencies).includes(pkg)) {
    logger.fail(
      `package \'${pkg}\' is not present within dependencies of ${packageFile}`
    );
    process.exit(1);
  }

  await NPM.uninstall(logger, workDir, pkg);

  // reload after npm uninstall
  pkgJSONContents = readPackageJSON(packageFile);
  const plugins = pkgJSONContents?.grouparoo?.plugins;

  if (plugins.includes(pkg)) {
    plugins.splice(plugins.indexOf(pkg), 1);
    plugins.sort();
    fs.writeFileSync(
      packageFile,
      JSON.stringify(pkgJSONContents, null, JSONUtils.spacer)
    );
  }

  logger.succeed(`Uninstalled${pkg ? ` ${pkg}` : ""}!`);
}
