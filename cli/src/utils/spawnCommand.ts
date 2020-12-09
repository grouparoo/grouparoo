import { spawn } from "child_process";
import Ora from "ora";

export default async function spawnCommand(
  command: string,
  args: string[],
  cwd: string,
  logger: any,
  runningMessage: string,
  successMessage: string
) {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args, { cwd });

    logger.info(runningMessage);
    logger.start("...");

    process.stdout.on(
      "data",
      (message) => (logger.text = message.toString().replace("\n", ""))
    );

    process.stderr.on(
      "data",
      (message) => (logger.text = message.toString().replace("\n", ""))
    );

    process.on("exit", function (code) {
      if (code !== 0) return reject(code);
      logger.succeed(successMessage);
      return resolve(code);
    });
  });
}
