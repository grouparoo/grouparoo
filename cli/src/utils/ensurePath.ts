import fs from "fs-extra";
import { Ora } from "ora";

export function ensurePath(workDir: string, logger: Ora) {
  logger.info(`path: ${workDir === "." ? process.env.INIT_CWD : workDir}`);

  if (!fs.existsSync(workDir)) {
    logger.fail(`${workDir} does not exist`);
    process.exit(1);
  }
}
