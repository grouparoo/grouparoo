import { CLI, log } from "actionhero";
import { users, purchases } from "../../../sample_data";
import { loadConfigFiles } from "../../../configFiles";
import { groups } from "../../../groups";
import { events } from "../../../events";
import { init, finalize } from "../../../util/shared";

export class Console extends CLI {
  constructor() {
    super();
    this.name = "demo-data-purchases";
    this.description =
      "Load eCommerce users and purchases into a source database.";
    this.inputs = {
      scale: { required: false, default: "1" },
    };
  }

  async run({ params }) {
    const scale = parseInt(params.scale);
    if (scale > 1) log(`Using scale = ${params.scale}`);

    await init({ reset: true });
    await users({ scale });
    await purchases({ scale });
    await events({ scale });
    await loadConfigFiles("setup");
    await loadConfigFiles("purchases");
    await groups();
    await finalize();
    return true;
  }
}
