// run demo command to set up the world
// run grouparoo config
// take screenshots of the destination

const { Service, Browser } = require("./puppet");
const { readConfig } = require("./util");

const APPS = readConfig("plugins");

module.exports.cmd = async function (vargs) {
  const results = [];
  const inputApps = vargs["_"] || [];
  const appKeys = inputApps.length > 0 ? inputApps : Object.keys(APPS);
  console.log(`Apps: ${appKeys.join(", ")}`);

  for (const key of appKeys) {
    results.push(await cmdApp(key));
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

async function cmdApp(key) {
  try {
    console.log(key);
    const runner = new Runner(key);
    await runner.run();
    return { key };
  } catch (error) {
    return { key, error };
  }
}

class Runner {
  constructor(appKey) {
    this.data = APPS[appKey];
    if (!this.data) {
      throw new Error(`Unknown app: ${appKey}`);
    }
    this.service = new Service(this.data.demo, ["plugins", appKey]);
  }

  async run() {
    await this.service.run(this.screenshots.bind(this));
  }

  async screenshots() {
    const app = new App(this.service, this.data);
    await app.screenshots();

    // TODO: sources

    for (const destKey of Object.keys(this.data.destinations)) {
      const data = this.data.destinations[destKey];
      const dest = new Destination(this.service, destKey, data);
      await dest.screenshots();
    }
  }
}

class App extends Browser {
  constructor(service, appData) {
    super(service, ["app"]);
    this.data = appData;
  }

  async screenshots() {
    const appPath = `/app/${this.data.app}`;

    // app options
    await this.goto(`${appPath}/edit`);
    await this.screenshot("app-edit-full");
    await this.screenshot("app-edit-options", {
      selector: "[data-screenshotid=appOptions]",
      border: 10,
    });
  }
}

class Destination extends Browser {
  constructor(service, destKey, destData) {
    super(service, [destKey]);
    this.data = destData;
  }

  async pickModel() {
    const page = await this.getPage();
    // pick full model
    await page.select("#form select", "__model");
    // wait for preview
    await page.waitForXPath("//h5[contains(text(), 'Sample Record')]");
  }

  async screenshots() {
    const destPath = `/model/${this.data.model}/destination/${this.data.id}`;
    const recordPath = `/model/${this.data.model}/record/new`;

    // make sure there is a preview
    await this.goto(recordPath);
    await this.form({ value: "12" });

    // destination options
    await this.goto(`${destPath}/edit`);
    await this.screenshot("destination-edit-full");
    await this.screenshot("destination-edit-options", {
      selector: "[data-screenshotid=destinationOptions]",
      border: 10,
    });

    // destination data
    await this.goto(`${destPath}/data`);
    await this.pickModel();
    await this.screenshot("destination-data-full");
    await this.screenshot("destination-data-records", {
      selector: "[data-screenshotid=destinationRecords]",
      border: 10,
    });
    await this.screenshot("destination-data-groups", {
      selector: "[data-screenshotid=destinationGroups]",
      border: 10,
    });
  }
}
