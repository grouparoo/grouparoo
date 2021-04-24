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
    this.name = "demo [type]";
    this.description =
      "Load eCommerce users and purchases into a source database and create properties including events.";
    this.inputs = {
      scale: { required: false, default: "1" },
      config: { required: false, letter: "c", flag: true },
    };
  }

  async run({ params }) {
    const scale = parseInt(params.scale);
    const config = !!params.config;

    if (scale > 1) {
      console.log(`Using scale = ${params.scale}`);
    }
    if (config) {
      console.log("Writing config to app.");
    } else {
      console.log("Writing config to database.");
    }

    let type = params._arguments[0];
    if (!type) {
      type = "purchases";
    }
    console.log(`Using type: ${type}`);
    const { db, subDirs } = getConfig(type);

    await init({ reset: true });
    await deleteConfigDir();

    if (["events", "mongo", "purchases"].includes(type)) {
      await users(db, { scale });
      await purchases(db, { scale });
    }
    if (["events"].includes(type)) {
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
