import path from "path";
import { spawn } from "child_process";
import http from "http";

async function spawnPromise(
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
      console.log(stdout);

      if (code !== 0) {
        console.error(stderr);
        return reject(new Error("something is wrong with the process"));
      }

      resolve();
    });
  });
}

async function httpGet(url: string) {
  return new Promise((resolve, reject) => {
    let data = "";
    http
      .get(url, (resp) => {
        resp.on("data", (chunk) => {
          data += chunk;
        });

        resp.on("end", () => {
          return resolve(JSON.parse(data));
        });
      })
      .on("error", (error) => {
        return reject(error);
      });
  });
}

// set server overrides
const port = 12345;
const url = `http://localhost:${port}`;
const apiProjectPath = path.join(__dirname, "..", "..", "..", "api");
const jestId = process.env.JEST_WORKER_ID || "1";

let apiProcess;

export async function sleep(timeMs = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeMs);
  });
}

export async function shutdown() {
  if (apiProcess) {
    await apiProcess.kill();
  }
}

export async function waitForAPI(count = 0) {
  if (count >= 30) {
    throw new Error("giving up on the API");
  }

  const actionUrl = `${url}/api/1/status`;
  try {
    const response = await httpGet(actionUrl);
    console.log(`API up and running @ ${url}`);
  } catch (error) {
    console.log(`cannot reach api: ${error}, sleeping and trying again...`);
    await sleep(1000);
    await waitForAPI(count + 1);
  }
}

export async function prepareForIntegrationTest() {
  const env = process.env;

  // re-create the test database
  await spawnPromise("./bin/drop_test_databases", [jestId], apiProjectPath);
  await spawnPromise("./bin/create_test_databases", [jestId], apiProjectPath);

  // start the api server
  apiProcess = spawn("node", ["./dist/server.js"], {
    cwd: apiProjectPath,
    env: Object.assign(
      {
        ACTIONHERO_TEST_FILE_EXTENSION: "js", // ensure that the test server doesn't run typescript files
        WEB_SERVER: true,
        PORT: port,
        WEB_URL: url,
        JEST_WORKER_ID: undefined,
      },
      env
    ),
  });

  // apiProcess.stdout.on("data", data => {
  //   console.log(data.toString());
  // });
  // apiProcess.stderr.on("data", data => {
  //   console.log(data.toString());
  // });

  await waitForAPI();

  return {
    port,
    url,
  };
}
