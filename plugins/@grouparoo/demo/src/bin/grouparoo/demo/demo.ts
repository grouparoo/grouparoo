import { CLI } from "actionhero";
import { writeAll } from "../../../util/sample_data";
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
      "b2c            (default) loads users and admins models",
      "b2b            loads account model",
      "users          includes users model with purchases",
      "accounts       includes accounts model with with payments",
      "admins         includes admins model",
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
      junkPercent: {
        required: false,
        default: "0",
        description: "what percent of the data should have problems?",
      },
      config: {
        required: false,
        letter: "c",
        flag: true,
        description:
          "add flag to write to config directory and not populate configuration into Grouparoo database",
      },
      seed: {
        required: false,
        letter: "s",
        flag: true,
        description:
          "add flag to only write (or output) demo source data and not touch Grouparoo database",
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
    junkPercent: number
  ) {
    await db.sessionStart();
    if (seed) db.seeding();
    await writeAll(db, { scale, junkPercent });
    await db.sessionEnd();
  }

  async run({ params }) {
    try {
      const scale = parseInt(params.scale) || 1;
      const junkPercent = parseInt(params.junkPercent) || 0;
      const seed = !!params.seed;
      const config = !!params.config;

      log(`Using scale = ${scale}, junkPercent = ${junkPercent}`);

      let types = params._arguments || [];
      if (types.length === 0) types = ["b2c"];

      const { db, resetOnly, sources, destinations } = getConfig(types);

      if (seed) {
        if (!db) {
          log("No database given for seed", "error");
        }
        log(`Seeding: ${db.name()}`);
        await this.loadData(db, seed, scale, junkPercent);
        return true;
      }

      if (config) {
        log("Writing config to app.");
      } else {
        log("Writing config to database.");
      }
      log(`Using types: ${types.join(", ")}`);
      log(`Using sources: ${sources.join(",")}`);
      log(`Using destinations: ${destinations.join(",")}`);
      log(`Using database: ${db ? db.constructor.name : "none"}`);

      log("Deleting current config directory.", "notice");
      await deleteConfigDir();

      await init({ reset: true });

      if (resetOnly) {
        return true;
      }

      if (db) {
        await this.loadData(db, seed, scale, junkPercent);
      }

      if (config) {
        await loadConfigFiles(db, true, [], []); // just setup
        await finalize();
        await writeConfigFiles(db, false, sources, destinations);
      } else {
        await loadConfigFiles(db, true, sources, destinations);
        await finalize();
      }

      return true;
    } catch (error) {
      log("❌ " + error, "emerg");
      process.exit(1);
    }
  }
}
