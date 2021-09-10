import { CLI } from "actionhero";
import {
  consumers,
  employees,
  purchases,
  accounts,
  plans,
  payments,
} from "../../../util/sample_data";
import {
  deleteConfigDir,
  loadConfigFiles,
  writeConfigFiles,
} from "../../../util/configFiles";
import { init, finalize } from "../../../util/shared";
import { getConfig } from "../../../util/config";
import { log } from "actionhero";
import { GrouparooCLI } from "@grouparoo/core";
import Connection from "../../../util/connection";

export class Demo extends CLI {
  constructor() {
    super();
    this.name = "demo [type] [type]";
    this.description = [
      "Load data into a source database, create properties, destinations, and other config.",
      'A demo@grouparoo.com Team Member is created. Password: "password"',
      "",
      "Valid Types:",
      "b2c            (default) loads users and purchases into source",
      "b2b            loads users, accounts, and payment data into source",
      "purchases      same as b2c",
      "accounts       same as b2b",
      "reset          only clear Grouparoo database and don't load config",
      "setup          only create the login Team Member",
      "postgres       (default) load source data into local Postgres database",
      "mongo          load specified source data into local MongoDB database",
      "mysql          load specified source data into local MySQL database",
      "snowflake      assumes a Snowflake instance with data already present",
      "bigquery       assumes a BigQuery instance with data already present",
      "mailchimp      create Mailchimp destination for data",
      "salesforce     create Salesforce destination for data",
    ].join("\n");
    this.inputs = {
      scale: {
        required: false,
        default: "1",
        description: "make the number more than 1 to multiple amount of data.",
      },
      config: {
        required: false,
        letter: "c",
        flag: true,
        description:
          "add flag to write to config directory and not populate configuraiton into Grouparoo database",
      },
      seed: {
        required: false,
        letter: "s",
        flag: true,
        description:
          "add flag to only write (or output) demo source data and not touch Grouparoo database",
      },
      force: {
        required: false,
        letter: "f",
        flag: true,
        description: "add flag to ensure deletion of config directory",
      },
    };
  }

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
  };

  async loadData(
    db: Connection,
    seed: boolean,
    scale: number,
    subDirs: string[]
  ) {
    let users = false;
    if (db) await db.sessionStart();
    if (seed && db) db.seeding();
    if (seed || hasDir(subDirs, ["purchases"])) {
      await consumers(db, { scale });
      await purchases(db, { scale });
      users = true;
    }
    if (seed || hasDir(subDirs, ["accounts"])) {
      await plans(db, {});
      await accounts(db, { scale });
      await payments(db, { scale });
      if (!users) {
        // don't do users twice when seeding!
        await employees(db, { scale });
      }
    }
    if (db) await db.sessionEnd();
  }

  async run({ params }) {
    try {
      const scale = parseInt(params.scale) || 1;
      const seed = !!params.seed;
      const config = !!params.config;
      const force = !!params.force;

      log(`Using scale = ${scale}`);

      let types = params._arguments || [];
      if (types.length === 0) {
        types = ["b2c"];
      }
      const { db, subDirs, dataset } = getConfig(types);

      if (seed) {
        if (!db) {
          log("No database given for seed", "error");
        }
        log(`Seeding: ${db.name()}`);
        await this.loadData(db, seed, scale, subDirs);
        return;
      }

      if (config) {
        log("Writing config to app.");
      } else {
        log("Writing config to database.");
      }
      log(`Using types: ${types.join(", ")}`);
      log(`Config directories: ${subDirs.join(",")}`);
      log(`Using dataset: ${dataset}`);
      log(`Using database: ${db ? db.constructor.name : "none"}`);

      if (force || config) {
        log("Deleting current config directory.", "notice");
        await deleteConfigDir();
      }
      await init({ reset: true });

      await this.loadData(db, seed, scale, subDirs);

      if (config) {
        const skip = ["setup"]; // not all get config files, they load into db

        const load = subDirs.filter((item) => skip.includes(item));
        await loadConfigFiles(dataset, db, load);
        await finalize();

        const files = subDirs.filter((item) => !skip.includes(item));
        await writeConfigFiles(dataset, db, files);
      } else {
        await loadConfigFiles(dataset, db, subDirs);
        await finalize();
      }

      return true;
    } catch (error) {
      log("❌ " + error, "emerg");
      process.exit(1);
    }
  }
}

function hasDir(given: string[], subDirs: string[]) {
  for (const subDir of subDirs) {
    if (given.includes(subDir)) {
      return true;
    }
  }
  return false;
}
