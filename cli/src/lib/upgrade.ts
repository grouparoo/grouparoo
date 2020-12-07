import fs from "fs-extra";
import ncu from "npm-check-updates";
import SpawnCommand from "../utils/spawnCommand";
import { buildLogger } from "../utils/logger";

export default async function Generate(workDir: string = process.cwd()) {
  const logger = buildLogger("Upgrading Grouparoo Project");
  logger.info(`path: ${workDir}`);

  if (!fs.existsSync(workDir)) {
    logger.fail(`${workDir} does not exist`);
    process.exit(1);
  }

  logger.info("Upgrading dependencies...");

  const upgraded = await ncu.run({
    cwd: workDir,
    packageFile: `${workDir}/package.json`,
    upgrade: true,
    jsonUpgraded: true,
    silent: true,
  });

  const upgradedPackages = Object.keys(upgraded);

  if (upgradedPackages.length === 0) {
    logger.succeed("Everything up to date!");
    return;
  }

  upgradedPackages.forEach((p) => {
    logger.succeed(`Updated ${p} to version ${upgraded[p]}`);
  });

  await SpawnCommand(
    "npm",
    ["install"],
    workDir,
    logger,
    "Installing dependencies",
    "Dependencies Updated"
  );

  logger.succeed("Grouparoo project updated!");
}
