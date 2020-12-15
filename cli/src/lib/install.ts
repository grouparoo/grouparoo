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
  const logger = buildLogger(`Installing ${pkg}`);

  ensurePath(workDir, logger);
  ensurePackageJSON(workDir, logger);

  const packageFile = path.join(workDir, "package.json");
  let pkgJSONContents = readPackageJSON(packageFile);
  let plugins: string[] = pkgJSONContents?.grouparoo?.plugins;

  if (!plugins) {
    logger.fail("there is no grouparoo section in this package.json");
    process.exit();
  }

  await NPM.install(logger, workDir, pkg);

  // reload after npm install
  pkgJSONContents = readPackageJSON(packageFile);
  plugins = pkgJSONContents?.grouparoo?.plugins;

  if (pkg) {
    let cleanedPackageName = "@" + pkg.split("@")[1];
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
