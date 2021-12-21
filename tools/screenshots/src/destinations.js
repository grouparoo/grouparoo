// run demo command to set up the world
// run grouparoo config
// take screenshots of the destination
const DESTINATIONS = {
  mailchimp: {
    demo: "--mailchimp",
    app: "mailchimpapp",
    model: "users",
    destination: "mailchimp",
  },
};

const execSync = require("../../shared/exec");
const { sleep } = require("../../shared/util");
const path = require("path");
const cp = require("child_process");

const PROJECT_ROOT = path.resolve(path.join(__dirname, "..", "..", ".."));
const APP_TO_RUN = "staging-community";
const VERBOSE = true;

module.exports.cmd = async function (vargs) {
  console.log("Destinations:");
  const results = [];
  for (const key of Object.keys(DESTINATIONS)) {
    try {
      console.log(key);
      const runner = new DestinationPuppeteer(key);
      await runner.run();
      results.push({ key });
    } catch (error) {
      results.push({ key, error });
    }
  }
  console.log("\n-------------\n");
  for (const result of results) {
    const { key, error } = result;
    if (error) {
      console.error(`${key}: error`, error);
    } else {
      console.log(`${key}: success`);
    }
  }
};

class DestinationPuppeteer {
  constructor(key) {
    this.data = DESTINATIONS[key];
    if (!this.data) {
      throw new Error(`Unknown destination: ${key}`);
    }
    this.rooCmd = path.join(PROJECT_ROOT, "cli", "dist", "grouparoo.js");
    this.cwd = path.join(PROJECT_ROOT, "apps", APP_TO_RUN);
    this.server = null;
  }

  async run() {
    await this.demo();
    await this.config();
    await this.screenshots();
    await this.close();
  }

  async demo() {
    const args = this.data.demo;
    if (!args) return;

    const demo = await execSync(`${this.rooCmd} demo -c ${args}`, {
      cwd: this.cwd,
      log: true,
    });
    if (VERBOSE) console.log(demo);

    const validate = await execSync(`${this.rooCmd} validate`, {
      cwd: this.cwd,
      log: true,
    });
    if (VERBOSE) console.log(validate);
  }

  async config() {
    return new Promise((done, failed) => {
      const start = cp.spawn(this.rooCmd, ["config"], { cwd: this.cwd });
      this.server = start;
      this.serverRunning = true;
      start.stdout.on("data", function (data) {
        const output = data.toString();
        if (output.indexOf("Opening Grouparoo Config in web browser") >= 0) {
          console.log(output);
          done();
        } else if (VERBOSE) console.log(output);
      });

      start.stderr.on("data", function (data) {
        console.error("ERROR!");
        console.error(data.toString());
        failed();
      });

      start.on("exit", function (code) {
        if (VERBOSE) {
          console.log("process exited with code " + code);
        }
      });
    });
  }

  async close() {
    if (this.server) {
      this.server.kill();
      let count = 0;
      while (this.server.exitCode === null && count < 1000) {
        await sleep(10);
        count++;
      }
    }
  }

  async screenshots() {
    await sleep(10 * 1000);
  }
}
