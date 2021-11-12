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

const TYPES = {
  setup: "only create the login Team Member",
  models: "loads users and accounts models",
  b2c: "loads users and admins models",
  b2b: "loads account model",
  users: "includes users model with purchases",
  accounts: "includes accounts model with with payments",
  admins: "includes admins model",
  postgres: "(default) load source data into local Postgres database",
  mongo: "load specified source data into local MongoDB database",
  mysql: "load specified source data into local MySQL database",
  sqlite: "load specified source data into local SQLite database",
  clickhouse: "load specified source data into local ClickHouse database",
  redshift: "assumes a Redshift instance with data already present",
  snowflake: "assumes a Snowflake instance with data already present",
  bigquery: "assumes a BigQuery instance with data already present",
  hubspot: "create Hubspot destination for data",
  mailchimp: "create Mailchimp destination for data",
  salesforce: "create Salesforce destination for data",
  logger: "create Logger destination for data",
};

const LETTERS = {
  accounts: "a",
  b2b: "b",
  config: "c",
  mailchimp: "m",
  salesforce: "s",
  logger: "l",
  users: "u",
};

export class Demo extends CLI {
  constructor() {
    super();
    this.name = "demo";
    this.description = [
      "Load data into a source database, create properties, destinations, and other config.",
      'A demo@grouparoo.com Team Member is created. Password: "password"',
    ].join("\n");
    this.inputs = Object.assign(
      {
        scale: {
          required: false,
          default: "1",
          description:
            "make the number more than 1 to multiple amount of data.",
        },
        junkPercent: {
          required: false,
          default: "0",
          description: "what percent of the data should have problems?",
        },
        config: {
          required: false,
          letter: LETTERS["config"],
          flag: true,
          description:
            "add flag to write to config directory and not populate configuration into Grouparoo database",
        },
        reset: {
          required: false,
          letter: LETTERS["seed"],
          flag: true,
          description: "only clear Grouparoo database and don't load config",
        },
        seed: {
          required: false,
          letter: LETTERS["seed"],
          flag: true,
          description:
            "add flag to only write (or output) demo source data and not touch Grouparoo database",
        },
      },
      Object.keys(TYPES).reduce((map, key) => {
        map[key] = {
          required: false,
          flag: true,
          description: TYPES[key],
          letter: LETTERS[key],
        };
        return map;
      }, {})
    );
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
      const passed = Object.keys(params).map((k) => k.toLowerCase());
      const scale = parseFloat(params.scale) || 1;
      const junkPercent = parseInt(params.junkPercent) || 0;
      const seed = passed.includes("seed");
      const config = passed.includes("config");
      const reset = passed.includes("reset");

      log(`Using scale = ${scale}, junkPercent = ${junkPercent}`);

      const validTypes = Object.keys(TYPES);
      let types = passed.filter((k) => validTypes.includes(k));
      if (types.length === 0) types = ["models"];

      const { db, sources, destinations } = getConfig(types);

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

      if (reset) {
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
