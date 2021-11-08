import { spawn } from "child_process";
import { tmpdir } from "os";
import path from "path";
import fs from "fs";

const bin = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "..",
  "cli",
  "dist",
  "grouparoo.js"
);
const tmpDir = path.join(tmpdir(), "grouparoo", "mega-delete-test");
const version: string = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "..", "package.json")).toString()
).version;

const packageJSON = `
{
  "author": "Your Name <email@example.com>",
  "name": "mega-delete-test",
  "description": "A Grouparoo Deployment",
  "version": "0.0.1",
  "engines": {
    "node": ">=12.0.0 <17.0.0"
  },
  "dependencies": {
    "@grouparoo/core": "file:${path.join(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "..",
      "core",
      `grouparoo-core-${version}.tgz`
    )}",
    "@grouparoo/demo": "file:${path.join(
      __dirname,
      "..",
      "..",
      "..",
      "demo",
      `grouparoo-demo-${version}.tgz`
    )}",
    "@grouparoo/calculated-property": "file:${path.join(
      __dirname,
      "..",
      "..",
      "..",
      "calculated-property",
      `grouparoo-calculated-property-${version}.tgz`
    )}",
    "@grouparoo/postgres": "file:${path.join(
      __dirname,
      "..",
      "..",
      "..",
      "postgres",
      `grouparoo-postgres-${version}.tgz`
    )}"
  },
  "scripts": {
    "start": "cd node_modules/@grouparoo/core && ./bin/start"
  },
  "grouparoo": {
    "plugins": [
      "@grouparoo/demo",
      "@grouparoo/calculated-property",
      "@grouparoo/postgres"
    ]
  }
}
`;

// if (fs.existsSync(tmpDir)) fs.rmdirSync(tmpDir, { recursive: true });
// fs.mkdirSync(tmpDir, { recursive: true });

console.log(`testing @ ${tmpDir}`);
// process.chdir(tmpDir);
// process.env.PWD = tmpDir;
// process.env.ACTIONHERO_CONFIG = path.join(
//   tmpDir,
//   "node_modules",
//   "@grouparoo",
//   "code",
//   "dist",
//   "config"
// );

// we pack up this plugin to install it locally, rather than from npm

describe("create and delete", () => {
  let packName: string;

  it("can pack up core", async () => {
    const { stdout } = await spawnPromise(
      "npm",
      "pack",
      path.join(__dirname, "..", "..", "..", "..", "..", "core")
    );
    packName = path.join(__dirname, "..", "..", stdout);
    expect(packName).toMatch(/grouparoo-core-.*.tgz/);
  }, 30000);

  it.each(["demo", "calculated-property", "postgres"])(
    "can pack up the %s plugin",
    async (plugin) => {
      const cwd = path.resolve(path.join(__dirname, "..", "..", "..", plugin));
      const { stdout } = await spawnPromise("npm", "pack", cwd);
      packName = path.join(__dirname, "..", "..", stdout);
      expect(packName).toMatch(/grouparoo-.*.tgz/);
    },
    60 * 1000
  );

  it(
    "can install the demo plugin",
    async () => {
      fs.writeFileSync(path.join(tmpDir, "package.json"), packageJSON);
      await spawnPromise("npm", ["install"]);
    },
    60 * 1000
  );

  it(
    "can generate a new project",
    async () => {
      await spawnPromise(bin, ["init", "."]);
    },
    60 * 1000
  );

  it("loads demo commands", async () => {
    const { stdout } = await spawnPromise(bin, ["help"]);
    expect(stdout).toContain("demo [options]");
  });

  it("can generate demo config", async () => {
    await spawnPromise(bin, ["demo", "-c", "--scale", "0.1"]);
  });

  it(
    "can run 'grouparoo run' to completion with config",
    async () => {
      const { stdout } = await spawnPromise(bin, ["run"]);
      expect(stdout).toContain("created Property `fullName`");
      expect(stdout).toContain("All Tasks Complete!");
    },
    60 * 1000 * 5
  );

  it("can remove the config entirely", async () => {
    await spawnPromise("rm", ["-rf", "config"]);
  });

  it.only(
    "can run 'grouparoo run' to completion without config",
    async () => {
      const { stdout } = await spawnPromise(bin, ["run"]);
      expect(stdout).toContain("deleted GrouparooModel `Users`");
      expect(stdout).toContain("deleted GrouparooModel `Admins`");
      expect(stdout).toContain("All Tasks Complete!");
    },
    60 * 1000 * 5
  );
});

export async function spawnPromise(
  command: string,
  args: Array<string> | string = [],
  cwd: string = tmpDir
): Promise<{ exitCode: number; stderr: string; stdout: string }> {
  return new Promise((resolve, reject) => {
    let stdout = "",
      stderr = "";

    if (typeof args === "string") args = [args];

    // console.log(`--> `, `${command} ${args.join(" ")}`);
    const spawnProcess = spawn(command, args, {
      cwd,
      env: { ...process.env, NODE_ENV: undefined },
    });

    spawnProcess.stdout.on("data", (data) => {
      stdout += String(data);
      // console.log(data.toString());
    });

    spawnProcess.stderr.on("data", (data) => {
      stderr += String(data);
      // console.error(data.toString());
    });

    spawnProcess.on("close", (code) => {
      if (code !== 0) return reject(new Error(stderr));
      return resolve({ stdout, stderr, exitCode: code });
    });
  });
}
