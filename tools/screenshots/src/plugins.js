// run demo command to set up the world
// run grouparoo config
// take screenshots of the destination

const APPS = {
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
  salesforce: {
    demo: "--salesforce",
    app: "salesforce",
    destinations: {
      "salesforce-export-objects": {
        model: "users",
        id: "salesforce_contacts",
      },
      "salesforce-export-accounts": {
        model: "accounts",
        id: "salesforce_accounts",
      },
    },
  },
};

const { Service, Browser } = require("./puppet");

module.exports.cmd = async function (vargs) {
  console.log("Apps:");
  const results = [];
  for (const key of Object.keys(APPS)) {
    try {
      console.log(key);
      const runner = new Runner(key);
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

class Runner {
  constructor(appKey) {
    this.data = APPS[appKey];
    if (!this.data) {
      throw new Error(`Unknown destination: ${appKey}`);
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
      selector: "#appOptions",
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
      selector: "#destinationOptions",
      border: 10,
    });

    // destination data
    await this.goto(`${destPath}/data`);
    await this.pickModel();
    await this.screenshot("destination-data-full");
    await this.screenshot("destination-data-records", {
      selector: "#destinationRecords",
      border: 10,
    });
    await this.screenshot("destination-data-groups", {
      selector: "#destinationGroups",
      border: 10,
    });
  }
}
