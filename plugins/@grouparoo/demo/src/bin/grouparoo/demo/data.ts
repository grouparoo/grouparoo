import { CLI, log } from "actionhero";
import { users, purchases } from "../../../util/sample_data";
import { loadConfigFiles } from "../../../util/configFiles";
import { events } from "../../../events/events";
import { init, finalize } from "../../../util/shared";
import { getConfig } from "./config";

export class Console extends CLI {
  constructor() {
    super();
    this.name = "demo [type]";
    this.description =
      "Load eCommerce users and purchases into a source database and create properties including events.";
    this.inputs = {
      scale: { required: false, default: "1" },
    };
  }

  async run({ params }) {
    const scale = parseInt(params.scale);
    if (scale > 1) {
      log(`Using scale = ${params.scale}`);
    }

    let type = params._arguments[0];
    if (!type) {
      type = "purchases";
    }
    console.log(`Using type: ${type}`);
    const { db, subDirs } = getConfig(type);

    await init({ reset: true });

    if (["events", "mongo", "purchases"].includes(type)) {
      await users(db, { scale });
      await purchases(db, { scale });
    }
    if (["events"].includes(type)) {
      await events({ scale });
    }

    await loadConfigFiles(db, ["setup"].concat(subDirs));
    await finalize();
    return true;
  }
}
