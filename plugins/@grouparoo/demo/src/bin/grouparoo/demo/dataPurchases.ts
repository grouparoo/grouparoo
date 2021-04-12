import { CLI, log } from "actionhero";
import { users, purchases } from "../../../util/sample_data";
import { loadConfigFiles } from "../../../util/configFiles";
import { init, finalize } from "../../../util/shared";
import { getConfig } from "./config";

export class Console extends CLI {
  constructor() {
    super();
    this.name = "demo-data-purchases";
    this.description =
      "Load eCommerce users and purchases into a source database and create properties.";
    this.inputs = {
      scale: { required: false, default: "1" },
    };
  }

  async run({ params }) {
    const scale = parseInt(params.scale);
    const { db, subDirs } = getConfig("purchases");
    if (scale > 1) log(`Using scale = ${params.scale}`);

    await init({ reset: true });
    await users(db, { scale });
    await purchases(db, { scale });
    await loadConfigFiles(db, ["setup"].concat(subDirs));
    await finalize();
    return true;
  }
}
