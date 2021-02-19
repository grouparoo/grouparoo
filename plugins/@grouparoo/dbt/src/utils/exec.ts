const cp = require("child_process");

export interface CommandResponse {
  stdout: string;
  stderr: string;
  err: string;
}
export function runCommand(
  command,
  options = { log: false, cwd: process.cwd() }
): Promise<CommandResponse> {
  if (options.log) console.log(command);

  return new Promise((done, failed) => {
    cp.exec(command, { ...options }, (err, stdout, stderr) => {
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
