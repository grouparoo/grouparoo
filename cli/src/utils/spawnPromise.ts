import { spawn } from "child_process";

export async function spawnPromise(
  command: string,
  args: string[] = [],
  cwd: string = process.cwd(),
  extraEnv = {},
  logger?: any
) {
  const {
    exitCode,
    stdout,
    stderr,
  }: { exitCode: number; stdout: string; stderr: string } = await new Promise(
    (resolve) => {
      let stdout = "";
      let stderr = "";

      const spawnProcess = spawn(command, args, {
        cwd,
        env: Object.assign(extraEnv, process.env),
      });

      spawnProcess.stdout.on("data", (data) => {
        stdout += String(data);
        if (logger) logger.text = String(data);
      });

      spawnProcess.stderr.on("data", (data) => {
        stderr += String(data);
        if (logger) logger.text = String(data);
      });

      spawnProcess.on("close", (exitCode) => {
        resolve({ exitCode, stdout, stderr });
      });
    }
  );

  return { exitCode, stdout, stderr };
}
