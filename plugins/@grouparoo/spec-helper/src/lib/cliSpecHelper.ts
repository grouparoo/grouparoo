import path from "path";
import fs from "fs-extra";
import { spawn } from "child_process";
import os from "os";

export namespace CLISpecHelper {
  const jestId = parseInt(process.env.JEST_WORKER_ID || "1");

  export async function spawnPromise(
    command: string,
    args: Array<string> = [],
    cwd: string = process.cwd(),
    extraEnv = {}
  ): Promise<{ exitCode: number; stderr: string; stdout: string }> {
    return new Promise((resolve, reject) => {
      const env = process.env;
      let stdout = "";
      let stderr = "";

      const spawnProcess = spawn(command, args, {
        cwd,
        env: Object.assign(extraEnv, env),
      });

      spawnProcess.stdout.on("data", (data) => {
        stdout += String(data);
      });

      spawnProcess.stderr.on("data", (data) => {
        stderr += String(data);
      });

      spawnProcess.on("close", (code) => {
        if (code !== 0) return reject(new Error(stderr));
        resolve({ stdout, stderr, exitCode: code });
      });
    });
  }

  export async function sleep(timeMs = 1000) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeMs);
    });
  }

  export async function clear(projectDir: string) {
    if (!fs.existsSync(projectDir)) fs.mkdirpSync(projectDir);
    await fs.emptyDir(projectDir);
  }

  export function corePath() {
    return path.join(require.resolve("@grouparoo/core"), "..", "..");
  }

  export async function install(
    pluginName: string,
    pluginPath: string,
    projectPath: string
  ) {
    const template = `
{
  "name": "test",
  "description": "A Grouparoo Deployment",
  "version": "0.0.1",
  "license": "MPL-2.0",
  "private": true,
  "dependencies": {},
  "scripts": {},
  "grouparoo": {
    "plugins": ["${pluginName}"]
  }
}
    `;

    fs.writeFileSync(path.join(projectPath, "package.json"), template);

    // we cannot pre-write the dependencies in the package.json, we need to use the npm cli so the symlinks are built
    await spawnPromise("npm", ["install", corePath()], projectPath);
    await spawnPromise("npm", ["install", pluginPath], projectPath);
  }

  function writeEnvFile(projectPath: string) {
    const template = `
PORT=3000
WEB_URL=http://localhost:3000
WEB_SERVER=true
WORKERS=1
SERVER_TOKEN=my-server-token

# GROUPAROO_CONFIG_DIR=/path/to/config

GROUPAROO_LOG_LEVEL=crit
# GROUPAROO_LOGS_PATH="logs"
# GROUPAROO_LOGS_STDOUT_DISABLE_COLOR=true
# GROUPAROO_LOGS_STDOUT_DISABLE_TIMESTAMP=true

REDIS_URL="redis://mock"
DATABASE_URL="sqlite://grouparoo_test.sqlite"
    `;

    fs.writeFileSync(path.join(projectPath, ".env"), template);
  }

  export function enableBootstrappedProperty(
    projectPath: string,
    sourceName: string
  ) {
    const file = path.join(
      projectPath,
      "config",
      "sources",
      `${sourceName}.js`
    );
    const contents = fs.readFileSync(file).toString();
    const lines = contents.split(os.EOL);
    const updatedLines: string[] = [];

    let inBootstrap = false;
    for (const line of lines) {
      if (line.includes("bootstrappedProperty: {")) inBootstrap = true;
      if (inBootstrap && line === "") inBootstrap = false;

      if (!inBootstrap) {
        updatedLines.push(line);
      } else {
        updatedLines.push(line.replace("// ", ""));
      }
    }

    fs.writeFileSync(file, updatedLines.join(os.EOL));
  }

  export function prepareForCLITest(
    pluginName: string,
    pluginPath: string,
    projectPath: string = `${os.tmpdir()}/grouparoo_test/cli_${jestId}`
  ) {
    // TODO: This only works within the monorepo
    const cliRoot = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "..",
      "cli",
      "dist"
    );
    const cliBin = path.join(cliRoot, "grouparoo.js");

    beforeAll(async () => {
      console.log(`testing ${pluginName} CLI @ ${projectPath}`);
      await clear(projectPath);
      await install(pluginName, pluginPath, projectPath);
      writeEnvFile(projectPath);
    }, 1000 * 60);

    async function runCliCommand(args: string[]) {
      const cliEnv = Object.assign({}, process.env, {
        GROUPAROO_PARENT_PATH: projectPath,
        JEST_WORKER_ID: jestId,
      });
      return spawnPromise(cliBin, args, projectPath, cliEnv);
    }

    return { cliBin, projectPath, runCliCommand, spawnPromise };
  }
}
