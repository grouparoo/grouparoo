import { run as NCURun } from "npm-check-updates";
import { PackageFile } from "npm-check-updates/build/src/types";
import { buildLogger } from "../utils/logger";
import { ensurePath } from "../utils/ensurePath";
import { ensurePackageJSON } from "../utils/ensurePackageJSON";
import { NPM } from "../utils/npm";
import path from "path";

export default async function Update() {
  const workDir: string = process.env.INIT_CWD;
  const logger = buildLogger("Upgrading Grouparoo Project");
  ensurePath(workDir, logger);
  ensurePackageJSON(workDir, logger);

  logger.info("Upgrading dependencies...");

  const upgraded = (await NCURun({
    cwd: workDir,
    packageFile: path.join(workDir, "package.json"),
    upgrade: true,
    jsonUpgraded: true,
    silent: true,
  })) as PackageFile;

  const upgradedPackages = Object.keys(upgraded);

  if (upgradedPackages.length === 0) {
    logger.succeed("Everything up to date!");
    return;
  }

  upgradedPackages.forEach((p) => {
    logger.succeed(`Updated ${p} to version ${upgraded[p]}`);
  });

  await NPM.install(logger, workDir);

  logger.succeed("Grouparoo project updated!");
}
