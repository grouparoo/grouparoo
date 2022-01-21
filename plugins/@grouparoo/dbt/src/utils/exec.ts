import childProcess, { ExecException } from "child_process";

export function runCommand(
  command: string,
  options = { log: false, cwd: process.cwd() }
): Promise<{ stdout: string; stderr: string; err: ExecException }> {
  if (options.log) console.log(command);

  return new Promise((done, failed) => {
    childProcess.exec(command, { ...options }, (err, stdout, stderr) => {
      // if (err) {
      //   err.stdout = stdout;
      //   err.stderr = stderr;
      //   failed(err);
      //   return null;
      // }

      done({ stdout, stderr, err });
    });
  });
}
