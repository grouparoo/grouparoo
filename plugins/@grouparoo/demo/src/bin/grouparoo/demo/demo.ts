import { CLI } from "actionhero";
import { users, purchases } from "../../../util/sample_data";
import {
  deleteConfigDir,
  loadConfigFiles,
  writeConfigFiles,
} from "../../../util/configFiles";
import { events } from "../../../events/events";
import { init, finalize } from "../../../util/shared";
import { getConfig } from "../../../util/config";

export class Console extends CLI {
  constructor() {
    super();
    this.name = "demo [type] [type]";
    this.description =
      "Load eCommerce users and purchases into a source database and create properties including events.";
    this.inputs = {
      scale: { required: false, default: "1" },
      config: { required: false, letter: "c", flag: true },
      force: { required: false, letter: "f", flag: true },
    };
  }

  async run({ params }) {
    console.log(JSON.stringify(params));
    const scale = parseInt(params.scale) || 1;
    const config = !!params.config;
    const force = !!params.force;

    console.log(`Using scale = ${scale}`);

    if (config) {
      console.log("Writing config to app.");
    } else {
      console.log("Writing config to database.");
    }

    let types = params._arguments || [];
    if (types.length === 0) {
      types = ["purchases"];
    }
    console.log(`Using types: ${types.join(", ")}`);
    const { db, subDirs } = getConfig(types);

    console.log(`Config directories: ${subDirs.join(",")}`);
    console.log(`Using database: ${db ? db.constructor.name : "none"}`);

    if (force || config) {
      console.log("Deleting current config directory.");
      await deleteConfigDir();
    }
    await init({ reset: true });

    if (hasDir(subDirs, ["events", "mongo", "purchases"])) {
      await users(db, { scale });
      await purchases(db, { scale });
    }
    if (hasDir(subDirs, ["events"])) {
      await events({ scale });
    }

    if (config) {
      const skip = ["setup"]; // don't need teams
      const filtered = subDirs.filter((item) => !skip.includes(item));
      await writeConfigFiles(db, filtered);
    } else {
      await loadConfigFiles(db, subDirs);
      await finalize();
    }

    return true;
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
