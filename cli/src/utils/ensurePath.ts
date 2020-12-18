import fs from "fs-extra";

export function ensurePath(workDir: string, logger) {
  logger.info(`path: ${workDir === "." ? process.env.INIT_CWD : workDir}`);

  if (!fs.existsSync(workDir)) {
    logger.fail(`${workDir} does not exist`);
    process.exit(1);
  }
}
