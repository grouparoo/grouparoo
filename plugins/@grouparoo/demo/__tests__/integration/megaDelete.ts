import { spawn } from "child_process";
import path from "path";
import fs from "fs";

const monorepoRoot = path.join(__dirname, "..", "..", "..", "..", "..");
const bin = path.join(monorepoRoot, "cli", "dist", "grouparoo.js");
const dir = path.normalize(
  path.join(monorepoRoot, "apps", "staging-enterprise")
);

console.log(`testing @ ${dir}`);

if (fs.existsSync(path.join(dir, "config"))) {
  throw new Error(`not testing as ${dir}/config already exists`);
}

describe("create and delete", () => {
  it("loads demo commands", async () => {
    const { stdout } = await spawnPromise(bin, ["help"]);
    expect(stdout).toContain("demo [options]");
  });

  it("can generate demo config", async () => {
    await spawnPromise(bin, ["demo", "-cl", "--scale", "0.1"]); // include the logger destination as well so there are exports
  });

  it(
    "can run 'grouparoo run' to completion with config",
    async () => {
      const { stdout } = await spawnPromise(bin, ["run"]);
      expect(stdout).toContain("created Property `fullName`");
      expect(stdout).toContain("All Tasks Complete");
    },
    60 * 1000 * 5
  );

  it("can remove the config entirely", async () => {
    await spawnPromise("rm", ["-rf", "config"]);
  });

  it(
    "can run 'grouparoo run' to completion without config",
    async () => {
      const { stdout } = await spawnPromise(bin, ["run"]);
      expect(stdout).toContain("deleted GrouparooModel");
      expect(stdout).toContain("class=record:destroy");
      expect(stdout).toContain("class=source:destroy");
      expect(stdout).toContain("class=app:destroy");
      expect(stdout).toContain("class=destination:destroy");
      expect(stdout).toContain("All Tasks Complete");
    },
    60 * 1000 * 5
  );
});

export async function spawnPromise(
  command: string,
  args: Array<string> | string = [],
  cwd: string = dir
): Promise<{ exitCode: number; stderr: string; stdout: string }> {
  return new Promise((resolve, reject) => {
    let stdout = "",
      stderr = "";

    if (typeof args === "string") args = [args];

    log(`--- Running Command ---`, true);
    log(`--> ${command} ${args.join(" ")}`, true);
    log("", true);

    const spawnProcess = spawn(command, args, {
      cwd,
      env: {
        ...process.env,
        WORKERS: "5",
        NODE_ENV: undefined,
        PWD: undefined,
        ACTIONHERO_CONFIG: undefined,
        GROUPAROO_SPEC_HELPER: undefined,
        TS_JEST: undefined,
      },
    });

    spawnProcess.stdout.on("data", (data) => {
      stdout += String(data);
      log(data);
    });

    spawnProcess.stderr.on("data", (data) => {
      stderr += String(data);
      log(data);
    });

    spawnProcess.on("close", (code) => {
      if (code !== 0) return reject(new Error(stderr));
      return resolve({ stdout, stderr, exitCode: code });
    });
  });
}

function log(message: string, lineBreak = false) {
  if (lineBreak) message += "\r\n";
  process.stdout.write(message);
}
