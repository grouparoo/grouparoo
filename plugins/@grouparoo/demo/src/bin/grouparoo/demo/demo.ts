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

export class Demo extends CLI {
  constructor() {
    super();
    this.name = "demo [type] [type]";
    this.description =
      "Load eCommerce users and purchases into a source database and create properties";
    this.inputs = {
      scale: { required: false, default: "1" },
      config: { required: false, letter: "c", flag: true },
      seed: { required: false, letter: "s", flag: true },
      force: { required: false, letter: "f", flag: true },
    };
  }

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
  };

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
        await db.sessionStart();
        db.seeding();
        await consumers(db, { scale });
        await purchases(db, { scale });
        await plans(db, {});
        await accounts(db, { scale });
        await payments(db, { scale });
        await db.sessionEnd();
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

      if (db) await db.sessionStart();
      if (hasDir(subDirs, ["purchases"])) {
        await consumers(db, { scale });
        await purchases(db, { scale });
      }
      if (hasDir(subDirs, ["accounts"])) {
        await plans(db, {});
        await accounts(db, { scale });
        await payments(db, { scale });
        await employees(db, { scale });
      }
      if (db) await db.sessionEnd();

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
