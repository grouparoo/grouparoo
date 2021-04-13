import path from "path";
import fs from "fs-extra";
import { spawn, spawnSync } from "child_process";
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
        return resolve({ stdout, stderr, exitCode: code });
      });
    });
  }

  export function spawnPromiseSync(
    command: string,
    args: Array<string> = [],
    cwd: string = process.cwd(),
    extraEnv = {}
  ): { exitCode: number; stderr: string; stdout: string } {
    const env = process.env;

    const syncResponse = spawnSync(command, args, {
      cwd,
      env: Object.assign(extraEnv, env),
    });
    const stdout = syncResponse.stdout.toString();
    const stderr = syncResponse.stderr.toString();

    if (syncResponse.status) throw new Error(stderr);
    return { stdout, stderr, exitCode: syncResponse.status };
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
  "dependencies": {
    "@grouparoo/core": "file:${corePath()}",
    "${pluginName}": "file:${pluginPath}"
  },
  "scripts": {},
  "grouparoo": {
    "plugins": ["${pluginName}"]
  }
}
    `;

    fs.writeFileSync(path.join(projectPath, "package.json"), template);

    // we don't want to use NPM because it will try to re-run scripts (even with --ignore-scripts)
    // npm would also be slow
    fs.mkdirpSync(path.join(projectPath, "node_modules", "@grouparoo"));
    fs.createSymlinkSync(
      corePath(),
      path.join(projectPath, "node_modules", "@grouparoo", "core"),
      "dir"
    );
    fs.createSymlinkSync(
      pluginPath,
      path.join(projectPath, "node_modules", pluginName),
      "dir"
    );
  }

  function writeEnvFile(projectPath: string) {
    const template = `
PORT=3000
WEB_URL=http://localhost:3000
WEB_SERVER=true
WORKERS=1
SERVER_TOKEN=my-server-token

# GROUPAROO_CONFIG_DIR=/path/to/config

GROUPAROO_LOG_LEVEL=info
# GROUPAROO_LOGS_PATH="logs"
GROUPAROO_LOGS_STDOUT_DISABLE_COLOR=true
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
    projectPath: string = `${os.tmpdir()}/grouparoo_test/cli/${pluginName}/${jestId}`
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

    const cliEnv = Object.assign({}, process.env, {
      GROUPAROO_LOGS_STDOUT_DISABLE_COLOR: "true",
      GROUPAROO_PARENT_PATH: projectPath,
      JEST_WORKER_ID: jestId,
    });

    async function runCliCommand(args: string[] | string) {
      if (!Array.isArray(args)) args = args.split(" ");
      return spawnPromise(cliBin, args, projectPath, cliEnv);
    }

    function runCliCommandSync(args: string[] | string) {
      if (!Array.isArray(args)) args = args.split(" ");
      return spawnPromiseSync(cliBin, args, projectPath, cliEnv);
    }

    return {
      cliBin,
      projectPath,
      runCliCommand,
      runCliCommandSync,
      spawnPromise,
    };
  }

  export function getGeneratorNames(
    pluginName: string,
    runCliCommandSync: Function
  ) {
    let generatorNames: string[] = [];
    const pluginPrefix = pluginName.replace("@grouparoo/", "");

    const { stdout, exitCode } = runCliCommandSync("generate --list", true);
    expect(exitCode).toBe(0);

    const output: string = stdout.split("Grouparoo: generate")[1];
    output
      .split(os.EOL)
      .filter((line) => line.includes(pluginPrefix))
      .filter((line) => line.includes(":"))
      .map((line) => line.trim())
      .forEach((line) => {
        const words = line.split(" ");
        generatorNames.push(words[0].trim());
      });

    return generatorNames;
  }

  export function testAllPluginGenerators(
    generatorNames: string[],
    projectPath: string,
    runCliCommand: Function
  ) {
    const apps = generatorNames.filter((name) => name.match(/:app$/));
    const sources = generatorNames.filter((name) => name.match(/:source$/));
    const properties = generatorNames.filter((name) =>
      name.match(/:property$/)
    );
    const destinations = generatorNames.filter((name) =>
      name.match(/:destination$/)
    );

    apps.forEach((app) => {
      const appPrefix = buildPrefix(app);
      const appMatcher = new RegExp(appPrefix);

      describe(`${app}`, () => {
        test(`generate app ${app}`, async () => {
          const { exitCode, stderr } = await runCliCommand(
            `generate ${app} app_${buildId(appPrefix)}`
          );
          expect(exitCode).toBe(0);
          expect(stderr).toBe("");
        });

        sources.forEach((source) => {
          const sourcePrefix = buildPrefix(source);
          const sourceMatcher = new RegExp(sourcePrefix);

          if (source.match(appMatcher)) {
            test(`generate source ${source}`, async () => {
              const { exitCode, stderr } = await runCliCommand(
                `generate ${source} source_${buildId(
                  sourcePrefix
                )} --parent app_${buildId(appPrefix)}`
              );
              expect(exitCode).toBe(0);
              expect(stderr).toBe("");

              CLISpecHelper.enableBootstrappedProperty(
                projectPath,
                `source_${buildId(sourcePrefix)}`
              );
            });

            properties.forEach((property) => {
              const propertyPrefix = buildPrefix(property);

              if (property.match(sourceMatcher)) {
                test(`generate property ${property}`, async () => {
                  const { exitCode, stderr } = await runCliCommand(
                    `generate ${property} property_${buildId(
                      propertyPrefix
                    )} --parent source_${buildId(sourcePrefix)}`
                  );
                  expect(exitCode).toBe(0);
                  expect(stderr).toBe("");
                });
              }
            });
          }
        });

        destinations.forEach((destination) => {
          const destinationPrefix = buildPrefix(destination);

          if (destination.match(appMatcher)) {
            test(`generate destination ${destination}`, async () => {
              const { exitCode, stderr } = await runCliCommand(
                `generate ${destination} destination_${buildId(
                  destinationPrefix
                )} --parent app_${buildId(appPrefix)}`
              );
              expect(exitCode).toBe(0);
              expect(stderr).toBe("");
            });
          }
        });
      });
    });

    describe("validation", () => {
      test("the generated config files can be locally validated", async () => {
        const { stdout, stderr, exitCode } = await runCliCommand(
          "validate --local"
        );
        expect(exitCode).toBe(0);
        expect(stderr).toBe("");
        expect(stdout).toContain("Validation succeeded");
      });
    });
  }

  function buildPrefix(name: string) {
    const parts = name.split(":");
    parts.pop();
    return parts.join(":");
  }

  function buildId(name: string) {
    return name.replace(/:/g, "_").replace(/-/g, "_");
  }
}
