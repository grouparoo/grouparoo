import path from "path";
import { spawn } from "child_process";
import fetch from "isomorphic-fetch";

// set server overrides
const host = process.env.SELENIUM_TEST_HOST || "localhost";
const port = 12345;
const url = `http://${host}:${port}`;
const apiProjectPath = path.join(__dirname, "..", "..", "..", "api");
const jestId = process.env.JEST_WORKER_ID || "1";
const serverToken = `serverToken-${process.env.JEST_WORKER_ID || 0}`;

let apiProcess;

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
      // console.log(stdout);

      if (code !== 0) {
        console.error(stderr);
        return reject(new Error("something is wrong with the process"));
      }

      resolve();
    });
  });
}

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
    await fetch(actionUrl).then((r) => r.json());
    // console.log(`API up and running @ ${url}`);
  } catch (error) {
    // console.log(`cannot reach api: ${error}, sleeping and trying again...`);
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
  const serverEnv = Object.assign(env, {
    ACTIONHERO_TEST_FILE_EXTENSION: "js", // ensure that the test server doesn't run typescript files
    WEB_SERVER: true,
    PORT: port,
    WEB_URL: url,
    API_VERSION: 1,
    JEST_WORKER_ID: jestId,
    SERVER_TOKEN: serverToken,
  });

  apiProcess = spawn("node", ["./dist/server.js"], {
    cwd: apiProjectPath,
    env: serverEnv,
  });

  apiProcess.stdout.on("data", (data) => {
    console.log(data.toString());
  });
  apiProcess.stderr.on("data", (data) => {
    console.log(data.toString());
  });

  await waitForAPI();

  return {
    port,
    url,
  };
}
