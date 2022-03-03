import { spawn } from "child_process";
import { chatRoom } from "actionhero";
import os from "os";

export async function spawnPromise(
  command: string,
  args: string[] = [],
  cwd: string = process.cwd(),
  extraEnv = {}
) {
  const {
    exitCode,
    stdout,
    stderr,
  }: { exitCode: number; stdout: string; stderr: string } = await new Promise(
    (resolve) => {
      let stdout = "";
      const stderr = "";

      chatRoom.broadcast({}, "system:cli", {
        type: "stdout",
        message:
          "$ " +
          command.replace("./node_modules/.bin/", "") +
          " " +
          args.join(" "),
        timestamp: new Date().getTime(),
      });

      chatRoom.broadcast({}, "system:cli", {
        type: "stdout",
        message: "",
      });

      const spawnProcess = spawn(command, args, {
        cwd,
        env: Object.assign(extraEnv, process.env),
      });

      spawnProcess.stdout.on("data", async (data) => {
        stdout += String(data);
        const lines = String(data).split(os.EOL);
        for (const line of lines) {
          await chatRoom.broadcast({}, "system:cli", {
            type: "stdout",
            message: line,
            timestamp: new Date().getTime(),
          });
        }
      });

      spawnProcess.stderr.on("data", async (data) => {
        stdout += String(data);
        const lines = String(data).split(os.EOL);
        for (const line of lines) {
          await chatRoom.broadcast({}, "system:cli", {
            type: "stderr",
            message: line,
            timestamp: new Date().getTime(),
          });
        }
      });

      spawnProcess.on("close", (exitCode) => {
        resolve({ exitCode, stdout, stderr });
      });
    }
  );

  return { exitCode, stdout, stderr, success: exitCode === 0 };
}
