import fs from "fs-extra";
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
  await SpawnCommand("npm", ["update"], workDir, log);

  log.success("Grouparoo project updated!");
}
