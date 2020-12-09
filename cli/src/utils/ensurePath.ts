import fs from "fs-extra";

export function ensurePath(workDir: string, logger) {
  logger.info(`path: ${workDir}`);

  if (!fs.existsSync(workDir)) {
    logger.fail(`${workDir} does not exist`);
    process.exit(1);
  }
}
