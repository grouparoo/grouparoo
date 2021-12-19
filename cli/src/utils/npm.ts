import os from "os";
import { spawnPromise } from "./spawnPromise";
import Chalk from "chalk";
import { Ora } from "ora";

export namespace NPM {
  const NPM = /^win/.test(process.platform) ? "npm.cmd" : "npm";

  export async function install(
    logger: any,
    workDir: string,
    pkg?: string,
    exact = true,
    npm_config_loglevel = "error",
    devDependency = false
  ) {
    let args = ["install"];

    if (devDependency) args.push("--save-dev");

    const npmCheck = await spawnPromise(NPM, ["--version"]);
    const npmVersion = npmCheck.stdout.trim();
    const majorNPMVersion = parseInt(npmVersion.split(".")[0]);
    if (majorNPMVersion === 7) args.push("--legacy-peer-deps");

    if (pkg) args.push(pkg);
    if (args.length > 0 && exact) args.unshift("--save-exact");

    logger.start("Installing...");

    const { exitCode, stdout, stderr } = await spawnPromise(
      NPM,
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
      logger.fail("Could not install:");
      return exitWithError(logger, stdout, stderr);
    }
  }

  export async function uninstall(
    logger: any,
    workDir: string,
    pkg: string,
    npm_config_loglevel = "error"
  ) {
    const args = ["uninstall", pkg];
    logger.start("Uninstalling...");

    const { exitCode, stdout, stderr } = await spawnPromise(
      NPM,
      args,
      workDir,
      { npm_config_loglevel },
      logger
    );

    if (exitCode === 0) {
      logger.succeed("Uninstall Complete!");
      console.log("\r\n------\r\n");
      console.log(Chalk.gray(stdout));
      console.log("------\r\n");
    } else {
      logger.fail("Could not uninstall:");
      return exitWithError(logger, stdout, stderr);
    }
  }

  function exitWithError(logger: Ora, stdout: string, stderr: string) {
    const lines: string[] = [];
    function logUniqueLines(s: string, level: "warn" | "fail") {
      s.split(os.EOL).map((line) => {
        if (!lines.includes(line)) {
          line = line.trim();
          console.info(Chalk.gray(line));
          lines.push(line.trim());
        }
      });
    }

    logUniqueLines(stderr, "warn");
    logUniqueLines(stdout, "fail");

    process.exit(1);
  }
}
