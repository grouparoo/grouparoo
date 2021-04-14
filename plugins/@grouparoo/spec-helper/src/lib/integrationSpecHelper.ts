import path from "path";
import { spawn } from "child_process";
import axios from "axios";

export namespace IntegrationSpecHelper {
  export async function spawnPromise(
    command: string,
    args: Array<string> = [],
    cwd: string = process.cwd(),
    extraEnv = {}
  ) {
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
        if (code !== 0) {
          console.error(stderr);
          return reject(new Error("something is wrong with the process"));
        }

        resolve(null);
      });
    });
  }

  export async function sleep(timeMs = 1000) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeMs);
    });
  }

  export async function shutdown(subProcess?) {
    if (subProcess) {
      await subProcess.kill();
      await sleep(3000);
    }
  }

  export async function waitForAPI(url: string, count = 0) {
    if (count >= 30) throw new Error("giving up on the API");

    const actionUrl = `${url}/api/1/status/public`;
    try {
      await axios.get(actionUrl);
      // console.log(`API up and running @ ${url}`);
    } catch (error) {
      // console.log(`cannot reach api: ${error}, sleeping and trying again...`);
      await sleep(1000);
      await waitForAPI(url, count + 1);
    }
  }

  export async function prepareForIntegrationTest(
    projectPath: string,
    disableCodeConfig = false
  ) {
    const jestId = parseInt(process.env.JEST_WORKER_ID || "1");
    const serverToken = `serverToken-${process.env.JEST_WORKER_ID || 0}`;
    const port = 12340 + jestId;
    const url = `http://localhost:${port}`;
    const env = process.env;

    // re-create the test database
    // relative to app
    await spawnPromise(
      "./../../core/bin/drop_test_databases",
      [jestId.toString()],
      projectPath
    );
    await spawnPromise(
      "./../../core/bin/create_test_databases",
      [jestId.toString()],
      projectPath
    );

    // start the api server
    const serverEnv = Object.assign(env, {
      INIT_CWD: projectPath,
      ACTIONHERO_TYPESCRIPT_MODE: "false", // ensure that the test server doesn't run typescript files
      WEB_SERVER: true,
      PORT: port,
      WEB_URL: url,
      API_VERSION: 1,
      JEST_WORKER_ID: jestId,
      SERVER_TOKEN: serverToken,
      GROUPAROO_CONFIG_DIR: disableCodeConfig ? "/not/a/real/dir" : undefined,
      GROUPAROO_ENV_CONFIG_FILE: "/path/to/nothing",
      GROUPAROO_LOG_LEVEL: "crit",
    });

    const subProcess = spawn("node", ["dist/grouparoo.js"], {
      cwd: path.join(projectPath, "node_modules/@grouparoo/core"),
      env: serverEnv,
    });

    subProcess.stdout.on("data", (data) => {
      console.log(data.toString());
    });
    subProcess.stderr.on("data", (data) => {
      console.log(data.toString());
    });

    await waitForAPI(url);

    return {
      subProcess,
      port,
      url,
    };
  }
}
