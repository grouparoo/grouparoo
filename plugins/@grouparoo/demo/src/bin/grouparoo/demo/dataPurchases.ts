import { CLI, log } from "actionhero";
import { users, purchases, stopRuns } from "../../../sample_data";
import { loadConfigFiles } from "../../../configFiles";
import { groups } from "../../../groups";
import { events } from "../../../events";
import { init } from "../../../util/shared";

export class Console extends CLI {
  constructor() {
    super();
    this.name = "grouparoo demo eCommerce data";
    this.description =
      "Load eCommerce users and purchases into a source database.";
    this.inputs = {
      scale: { required: false, default: 1 },
    };
  }

  async run({ params }) {
    const scale = params.scale;
    if (scale > 1) {
      log(`Using scale = ${params.scale}`);
    }
    await init({ reset: true });
    await users({ scale });
    await purchases({ scale });
    await loadConfigFiles();
    await events({ scale });
    await groups();
    await stopRuns();
    return true;
  }
}
