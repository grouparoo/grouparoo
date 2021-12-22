// run demo command to set up the world
// run grouparoo config
// take screenshots of the destination
const DESTINATIONS = {
  mailchimp: {
    demo: "--mailchimp",
    app: "mailchimpapp",
    destinations: {
      "mailchimp-export-contacts": {
        model: "users",
        id: "mailchimp",
      },
    },
  },
};

const execSync = require("../../shared/exec");
const { sleep } = require("../../shared/util");
const path = require("path");
const fs = require("fs-extra");
const cp = require("child_process");
const puppeteer = require("puppeteer");

const PROJECT_ROOT = path.resolve(path.join(__dirname, "..", "..", ".."));
const APP_TO_RUN = "staging-community";
const VERBOSE = true;
const HOST = "http://localhost:3000";
const HEADLESS = false;
const PAGESIZE = { width: 1200, height: 800 };

module.exports.cmd = async function (vargs) {
  console.log("Destinations:");
  const results = [];
  for (const key of Object.keys(DESTINATIONS)) {
    try {
      console.log(key);
      const runner = new Service(key);
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

class Service {
  constructor(serviceKey) {
    this.data = DESTINATIONS[serviceKey];
    if (!this.data) {
      throw new Error(`Unknown destination: ${serviceKey}`);
    }
    this.rooCmd = path.join(PROJECT_ROOT, "cli", "dist", "grouparoo.js");
    this.cwd = path.join(PROJECT_ROOT, "apps", APP_TO_RUN);
    this.dirPath = path.join(
      PROJECT_ROOT,
      "tools",
      "screenshots",
      "output",
      "destinations",
      serviceKey
    );
    this.server = null;
    this.page = null;
    this.browser = null;
  }

  async run() {
    try {
      await this.open();
      await this.demo();
      await this.config();
      for (const destKey of Object.keys(this.data.destinations)) {
        const dest = new Destination(this, destKey);
        await dest.screenshots();
      }
    } finally {
      await this.close();
    }
  }

  async open() {
    if (fs.existsSync(this.dirPath)) {
      fs.rmSync(this.dirPath, { recursive: true, force: true });
    }
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
    if (this.browser) {
      await this.browser.close();
    }
    this.page = null;
    if (this.server) {
      this.server.kill();
      let count = 0;
      while (this.server.exitCode === null && count < 1000) {
        await sleep(10);
        count++;
      }
      this.server = null;
    }
  }

  async goto(path) {
    if (!this.browser) {
      this.browser = await puppeteer.launch({
        headless: HEADLESS,
        defaultViewport: PAGESIZE,
      });
    }
    if (!this.page) {
      this.page = await this.browser.newPage();
    }
    const url = `${HOST}${path}`;
    await this.page.goto(url);
    // no alerts
    await this.page.waitForFunction(
      () => !document.querySelector(".alert-warning")
    );
  }
}

class Destination {
  constructor(service, destKey) {
    this.service = service;
    this.data = service.data.destinations[destKey];
    this.shotDir = path.join(service.dirPath, destKey);
  }

  async goto(path) {
    return this.service.goto(path);
  }

  async form(fields) {
    const page = this.service.page;
    for (const field of Object.keys(fields)) {
      const value = fields[field];
      const selector = `input[name="${field}"]`;
      const input = await page.waitForSelector(selector);
      // await page.$eval(selector, (el) => (el.value = value));
      await input.type(value);
    }

    await page.click('button[type="submit"]');
    await page.waitForNavigation();
  }

  async pickModel() {
    const page = this.service.page;
    // pick full model
    await page.select("#form select", "__model");
    // wait for preview
    await page.waitForXPath("//h5[contains(text(), 'Sample Record')]");
  }

  async screenshot(name) {
    // TODO: page in sub element
    const page = this.service.page;
    const filePath = path.join(this.shotDir, `${name}.png`);
    const dirPath = path.dirname(filePath);
    fs.mkdirpSync(dirPath);
    await page.screenshot({ path: filePath, fullPage: true });
  }

  async screenshots() {
    const appPath = `/app/${this.service.data.app}`;
    const destPath = `/model/${this.data.model}/destination/${this.data.id}`;
    const recordPath = `/model/${this.data.model}/record/new`;
    await this.goto(recordPath);
    await this.form({ value: "12" });
    await this.goto(`${appPath}/edit`);
    await this.screenshot("app-options");
    await this.goto(`${destPath}/edit`);
    await this.screenshot("destination-options");
    await this.goto(`${destPath}/data`);
    await this.pickModel();
    await this.screenshot("destination-data");
  }
}
