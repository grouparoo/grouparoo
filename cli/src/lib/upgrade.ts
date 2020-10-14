import fs from "fs-extra";
import ncu from "npm-check-updates";
import SpawnCommand from "./spawnCommand";
import Logger from "./logger";

export default async function Generate(workDir: string = process.cwd()) {
  const log = new Logger();

  log.headline("Upgrading Grouparoo Project");
  log.debug(`path: ${workDir}`);

  if (!fs.existsSync(workDir)) {
    log.error(`${workDir} does not exist`);
    process.exit(1);
  }

  log.info("Upgrading dependencies...");

  const upgraded = await ncu.run({
    cwd: workDir,
    packageFile: `${workDir}/package.json`,
    upgrade: true,
    jsonUpgraded: true,
    silent: true,
  });

  const upgradedPackages = Object.keys(upgraded);

  if (upgradedPackages.length === 0) {
    log.success("Everything up to date!");
    return;
  }

  upgradedPackages.forEach((p) => {
    log.success(`Updated ${p} to version ${upgraded[p]}`);
  });

  log.info("Installing dependencies...");
  await SpawnCommand("npm", ["install"], workDir, log);
  log.success("Grouparoo project updated!");
}
