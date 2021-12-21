import path from "path";
import fs from "fs-extra";
import { spawn, spawnSync } from "child_process";
import os from "os";

const timeout = 1000 * 30;

export namespace CLISpecHelper {
  const jestId = parseInt(process.env.JEST_WORKER_ID || "1");

  /**
   * For most plugins, this test method should be able to test all the generators and run the validate command
   * Otherwise, it can be decomposed with the other methods in this file
   */
  export function validateGenerators(pluginName: string, pluginPath: string) {
    describe(`${pluginName} CLI`, () => {
      const { projectPath, runCliCommand, runCliCommandSync } =
        CLISpecHelper.prepareForCLITest(pluginName, pluginPath);

      const generatorNames = CLISpecHelper.getGeneratorNames(
        pluginName,
        runCliCommandSync
      );

      CLISpecHelper.testAllPluginGenerators(
        generatorNames,
        projectPath,
        runCliCommand
      );
    });
  }

  export async function spawnPromise(
    command: string,
    args: Array<string> = [],
    cwd: string = process.cwd(),
    env = {}
  ): Promise<{ exitCode: number; stderr: string; stdout: string }> {
    return new Promise((resolve, reject) => {
      let stdout = "";
      let stderr = "";

      const spawnProcess = spawn(command, args, {
        cwd,
        env: {
          ...env,
          GROUPAROO_TELEMETRY_ENABLED: "false",
        },
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
    env = {}
  ): { exitCode: number; stderr: string; stdout: string } {
    const syncResponse = spawnSync(command, args, {
      cwd,
      env: {
        ...env,
        GROUPAROO_TELEMETRY_ENABLED: "false",
      },
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

  export function clear(projectDir: string) {
    if (!fs.existsSync(projectDir)) fs.mkdirpSync(projectDir);
    fs.emptyDirSync(projectDir);
  }

  export function corePath() {
    return path.join(require.resolve("@grouparoo/core"), "..", "..");
  }

  export function install(
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
    ${
      pluginName === "@grouparoo/sqlite"
        ? ""
        : `"@grouparoo/sqlite": "file:${corePath()}/../plugins/@grouparoo/sqlite",`
    }
    "${pluginName}": "file:${pluginPath}"
  },
  "scripts": {},
  "grouparoo": {
    "plugins": ["${pluginName}", "@grouparoo/sqlite"]
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
    if (pluginName !== "@grouparoo/sqlite") {
      fs.createSymlinkSync(
        `${corePath()}/../plugins/@grouparoo/sqlite`,
        path.join(projectPath, "node_modules", "@grouparoo", "sqlite"),
        "dir"
      );
    }
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

  export function prepareDestinationTemplate(
    projectPath: string,
    destinationName: string,
    groupName = "everyone"
  ) {
    const file = path.join(
      projectPath,
      "config",
      "destinations",
      `${destinationName}.js`
    );
    const contents = fs.readFileSync(file).toString();
    const lines = contents.split(os.EOL);
    const updatedLines: string[] = [];

    let inMapping = false;
    let inDestinationGroupMemberships = false;

    for (const line of lines) {
      if (line.includes('groupId: "..."')) {
        updatedLines.push(
          line.replace('groupId: "..."', `groupId: "${groupName}"`)
        );
      } else if (line.includes('syncMode: "..."')) {
        updatedLines.push(line.replace('syncMode: "..."', `syncMode: "sync"`));
      } else {
        if (line.includes("mapping: {") && !line.includes("}")) {
          inMapping = true;
          updatedLines.push(`      mapping: { user_id: 'user_id'`);
        }
        if (
          line.includes("destinationGroupMemberships: {") &&
          !line.includes("}")
        ) {
          inDestinationGroupMemberships = true;
          updatedLines.push(`      destinationGroupMemberships: {`);
        }
        if (
          (inMapping || inDestinationGroupMemberships) &&
          line.trim() === "},"
        ) {
          inMapping = false;
          inDestinationGroupMemberships = false;
        }

        if (!inMapping && !inDestinationGroupMemberships) {
          updatedLines.push(line);
        } else {
          // skip existing mapping/membership lines
        }
      }
    }

    fs.writeFileSync(file, updatedLines.join(os.EOL));
  }

  export async function generateGroup(
    runCliCommand: Function,
    groupName = "everyone"
  ) {
    return runCliCommand(`generate group ${groupName} --overwrite`);
  }

  export async function generatePropertyToBootstrap(
    runCliCommand: Function,
    projectPath: string,
    propertyName: string,
    sourceId: string,
    sourceGenerator: string,
    properties: string[]
  ) {
    // determine the right property to generate
    const prefix = buildPrefix(sourceGenerator);
    let propertyGenerator = `${prefix}:property`;

    if (!properties.includes(propertyGenerator)) {
      // try second pattern
      propertyGenerator = `${prefix.split(":")[0]}:property`;
      if (!properties.includes(propertyGenerator)) {
        throw new Error(
          `Could not determine appropriate property to generate for source ${sourceGenerator}`
        );
      }
    }

    await runCliCommand(
      `generate ${propertyGenerator} ${propertyName} --parent ${sourceId}`
    );

    const file = path.join(
      projectPath,
      "config",
      "properties",
      `${propertyName}.js`
    );
    const contents = fs.readFileSync(file).toString();
    const lines = contents.split(os.EOL);
    const updatedLines: string[] = [];

    // make sure that the property is unique and not an array
    for (const line of lines) {
      if (line.includes("unique: false")) {
        updatedLines.push(line.replace("unique: false", "unique: true"));
      } else if (line.includes("isArray: true")) {
        updatedLines.push(line.replace("isArray: true", "isArray: false"));
      } else {
        updatedLines.push(line);
      }
    }

    fs.writeFileSync(file, updatedLines.join(os.EOL));
  }

  export async function generateModel(
    runCliCommand: Function,
    modelName = "mod_profiles"
  ) {
    await runCliCommand(`generate model ${modelName} --overwrite`);
  }

  export async function generateUserSourceToPropertyProperty(
    projectPath: string,
    runCliCommand: Function,
    propertyNames: string | string[] = "user_id"
  ) {
    // create app, source, & destinations with SQLite if not present

    await runCliCommand(`generate sqlite:app sqlite_app --overwrite`);
    await runCliCommand(
      `generate sqlite:table:source sqlite_source --parent sqlite_app --overwrite`
    );

    if (typeof propertyNames === "string") propertyNames = [propertyNames];
    for (const propertyName of propertyNames) {
      await runCliCommand(
        `generate sqlite:table:property ${propertyName} --parent sqlite_source --overwrite`
      );
      const configFile = path.join(
        projectPath,
        "config",
        "properties",
        `${propertyName}.js`
      );
      let contents = fs.readFileSync(configFile).toString();
      contents = contents.replace("unique: false", "unique: true");
      fs.writeFileSync(configFile, contents);
    }
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

    clear(projectPath);
    install(pluginName, pluginPath, projectPath);
    writeEnvFile(projectPath);

    const cliEnv = Object.assign({}, process.env, {
      GROUPAROO_LOGS_STDOUT_DISABLE_COLOR: "true",
      GROUPAROO_PARENT_PATH: projectPath,
      JEST_WORKER_ID: jestId,
      INIT_CWD: undefined,
      DATABASE_URL: undefined,
      REDIS_URL: undefined,
      PORT: undefined,
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
    const triedGenerators = [];
    const apps = generatorNames.filter((name) => name.match(/:app/));
    const sources = generatorNames.filter((name) => name.match(/:source/));
    const properties = generatorNames.filter((name) => name.match(/:property/));
    const destinations = generatorNames.filter((name) =>
      name.match(/:destination/)
    );

    let modelCreated = false;

    apps.forEach((app) => {
      const appPrefix = buildPrefix(app);
      const appMatcher = new RegExp(appPrefix);

      describe(`${app}`, () => {
        test(
          `generate app ${app}`,
          async () => {
            const { exitCode, stdout, stderr } = await runCliCommand(
              `generate ${app} app_${buildId(appPrefix)}`
            );
            expect(exitCode).toBe(0);
            testStdErr(projectPath, stdout, stderr);
            triedGenerators.push(app);
          },
          timeout
        );

        sources.forEach((source) => {
          const sourcePrefix = buildPrefix(source);
          const sourceMatcher = new RegExp(sourcePrefix);

          if (source.match(appMatcher)) {
            test(
              `generate source ${source}`,
              async () => {
                if (!modelCreated) {
                  await CLISpecHelper.generateModel(runCliCommand);
                  modelCreated = true;
                }

                const sourceId = `source_${buildId(sourcePrefix)}`;
                const { exitCode, stdout, stderr } = await runCliCommand(
                  `generate ${source} ${sourceId} --parent app_${buildId(
                    appPrefix
                  )}`
                );
                expect(exitCode).toBe(0);
                testStdErr(projectPath, stdout, stderr);

                // Generate the bootstrapped property
                if (!source.match(/:query:/)) {
                  await CLISpecHelper.generatePropertyToBootstrap(
                    runCliCommand,
                    projectPath,
                    "user_id",
                    sourceId,
                    source,
                    properties
                  );
                }

                triedGenerators.push(source);
              },
              timeout
            );

            properties.forEach((property) => {
              const propertyPrefix = buildPrefix(property);

              if (
                property.match(sourceMatcher) || // it's a property matching this source
                property.split(":").length < 3 // it's a generic property for either source
              ) {
                test(
                  `generate property ${property}`,
                  async () => {
                    const { exitCode, stdout, stderr } = await runCliCommand(
                      `generate ${property} property_${buildId(
                        sourcePrefix
                      )}_${buildId(propertyPrefix)} --parent source_${buildId(
                        sourcePrefix
                      )}`
                    );
                    expect(exitCode).toBe(0);
                    testStdErr(projectPath, stdout, stderr);
                    triedGenerators.push(property);
                  },
                  timeout
                );
              }
            });
          }
        });

        destinations.forEach((destination, idx) => {
          const destinationPrefix = buildPrefix(destination);

          if (destination.match(appMatcher)) {
            test(
              `generate destination ${destination}`,
              async () => {
                if (!modelCreated) {
                  await CLISpecHelper.generateModel(runCliCommand);
                  modelCreated = true;
                }

                if (idx === 0) await generateGroup(runCliCommand); // make a group to send to the destination
                if (idx === 0 && properties.length === 0) {
                  await generateUserSourceToPropertyProperty(
                    projectPath,
                    runCliCommand
                  ); // if we have no properties, we will need at least one property
                }

                const { exitCode, stdout, stderr } = await runCliCommand(
                  `generate ${destination} destination_${buildId(
                    destinationPrefix
                  )} --parent app_${buildId(appPrefix)}`
                );
                expect(exitCode).toBe(0);
                testStdErr(projectPath, stdout, stderr);

                CLISpecHelper.prepareDestinationTemplate(
                  projectPath,
                  `destination_${buildId(destinationPrefix)}`
                );

                triedGenerators.push(destination);
              },
              timeout
            );
          }
        });
      });
    });

    describe("validation", () => {
      test(
        "the generated config files can be locally validated",
        async () => {
          const { stdout, stderr, exitCode } = await runCliCommand(
            "validate --local"
          );
          expect(exitCode).toBe(0);
          testStdErr(projectPath, stdout, stderr);
          expect(stdout).toContain("Validation succeeded");
        },
        timeout
      );
    });

    describe("everything was tested", () => {
      test("there were generators to test", () => {
        expect(generatorNames.length).toBeGreaterThan(0);
      });

      generatorNames.forEach((name) => {
        test(`${name} was tested`, () => {
          expect(triedGenerators).toContain(name);
        });
      });
    });
  }

  function buildPrefix(name: string) {
    const parts = name
      .split(":")
      .filter((p) => p !== "app")
      .filter((p) => p !== "source")
      .filter((p) => p !== "property")
      .filter((p) => p !== "destination");
    return parts.join(":");
  }

  function buildId(name: string) {
    return name.replace(/:/g, "_").replace(/-/g, "_");
  }

  function testStdErr(projectPath: string, stdout: string, stderr: string) {
    try {
      expect(stderr).toBe("");
    } catch (error) {
      console.log(`Error testing @ ${projectPath}`);
      console.log(
        `Try locally with: cd ${projectPath} && GROUPAROO_PARENT_PATH="${projectPath}" roo validate --local`
      );
      console.log(`--- STDOUT --- `);
      console.log(stdout);
      console.log(`--- STDERR --- `);
      console.log(stderr);
      throw error;
    }
  }
}
