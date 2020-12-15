import fs from "fs-extra";
import path from "path";

export function ensurePackageJSON(workDir: string, logger) {
  const packageFile = path.join(workDir, "package.json");
  if (!fs.existsSync(packageFile)) {
    logger.fail("cannot find a package.json file in this directory");
    process.exit(1);
  }
}
