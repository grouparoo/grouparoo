import { spawnPromise } from "./spawnPromise";
import Chalk from "chalk";

export namespace NPM {
  export async function install(
    logger: any,
    workDir: string,
    pkg?: string,
    exact = true,
    npm_config_loglevel = "error"
  ) {
    const args = ["install"];

    const npmCheck = await spawnPromise("npm", ["--version"]);
    const npmVersion = npmCheck.stdout.trim();
    const majorNPMVersion = parseInt(npmVersion.split(".")[0]);
    if (majorNPMVersion === 7) args.push("--legacy-peer-deps");

    if (pkg) args.push(pkg);
    if (args.length > 0 && exact) args.unshift("--save-exact");

    logger.start("Installing...");

    const { exitCode, stdout, stderr } = await spawnPromise(
      "npm",
      args,
      workDir,
      { npm_config_loglevel },
      logger
    );

    if (exitCode === 0) {
      logger.succeed("Installation Complete!");
      console.log("\r\n------\r\n");
      console.log(Chalk.gray(stdout));
      console.log("------\r\n");
    } else {
      throw new Error(stderr);
    }
  }
}
