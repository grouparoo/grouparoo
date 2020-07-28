import Logger from "./logger";
import { spawn } from "child_process";

export default async function spawnCommand(
  command: string,
  args: string[],
  cwd: string,
  log: Logger
) {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args, { cwd });

    process.stdout.on("data", (message) =>
      log.debug(message.toString().replace("\n", ""))
    );
    process.stderr.on("data", (message) =>
      log.warn(message.toString().replace("\n", ""))
    );

    process.on("exit", function (code) {
      if (code !== 0) return reject(code);
      return resolve(code);
    });
  });
}
