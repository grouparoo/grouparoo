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

class Service {
  constructor(demoArgs, subdirs) {
    this.rooCmd = path.join(PROJECT_ROOT, "cli", "dist", "grouparoo.js");
    this.cwd = path.join(PROJECT_ROOT, "apps", APP_TO_RUN);
    this.demoArgs = demoArgs;
    this.dirPath = path.join(
      PROJECT_ROOT,
      "tools",
      "screenshots",
      "output",
      ...subdirs
    );
    this.server = null;
    this.page = null;
    this.browser = null;
  }

  async run(functionToRun) {
    try {
      await this.open();
      await this.demo();
      await this.config();
      await functionToRun();
    } finally {
      await this.close();
    }
  }

  async open() {
    if (!this.dirPath) return;
    if (fs.existsSync(this.dirPath)) {
      fs.rmSync(this.dirPath, { recursive: true, force: true });
    }
  }

  async demo() {
    const args = this.demoArgs;
    if (args === null) return;

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

  async getPage() {
    if (!this.browser) {
      this.browser = await puppeteer.launch({
        headless: HEADLESS,
        defaultViewport: PAGESIZE,
      });
    }
    if (!this.page) {
      this.page = await this.browser.newPage();
    }
    return this.page;
  }

  async goto(path) {
    const page = await this.getPage();
    const url = `${HOST}${path}`;
    await page.goto(url);
    // no alerts
    await page.waitForFunction(() => !document.querySelector(".alert-warning"));
  }
}

class Browser {
  constructor(service, subdirs) {
    this.service = service;
    this.shotDir = path.join(service.dirPath, ...subdirs);
  }

  async getPage() {
    return this.service.getPage();
  }

  async goto(path) {
    return this.service.goto(path);
  }

  async form(fields) {
    const page = await this.getPage();
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

  async screenshot(name, options = {}) {
    const page = await this.getPage();
    const filePath = path.join(this.shotDir, `${name}.png`);
    const dirPath = path.dirname(filePath);
    const selector = options.selector;
    fs.mkdirpSync(dirPath);
    if (!selector) {
      await page.screenshot({ path: filePath, fullPage: true });
    } else {
      const border = options.border || 0;
      await page.waitForSelector(selector);
      const element = await page.$(selector);
      const box = await element.boundingBox(); // { x, y, width, height }
      const x = box.x - border;
      const y = box.y - border;
      const width = box.width + border * 2;
      const height = box.height + border * 2;
      await page.screenshot({
        path: filePath,
        clip: { x, y, width, height },
      });
    }
  }
}
module.exports = { Service, Browser };
