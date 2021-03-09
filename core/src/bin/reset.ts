import { GrouparooCLI } from "../modules/cli";
import { CLI, log } from "actionhero";
import { Reset } from "../modules/reset";

export class Destroy extends CLI {
  constructor() {
    super();
    this.name = "reset <mode>";
    this.description =
      "Reset part of this Cluster. Mode can be `cluster` (all data), `data` (imported data) and `cache`";
    this.inputs = {
      confirm: {
        required: false,
        default: false,
        flag: true,
        letter: "c",
        description: "Confirm the command",
      },
    };
  }

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
  };

  async run({ params }) {
    const [mode]: [string] = params._arguments || [];
    if (mode) params.mode = mode;

    GrouparooCLI.logCLI(
      this.name.replace(" <mode>", mode ? " " + mode : ""),
      false
    );

    if (!params.confirm) {
      log(`You need to --confirm this command`, "warning");
      process.exit(1);
    }

    if (mode === "cluster") {
      await Reset.cluster(process.env.GROUPAROO_RUN_MODE);
    } else if (mode === "data") {
      await Reset.data(process.env.GROUPAROO_RUN_MODE);
      await Reset.resetHighWatermarks();
    } else if (mode === "cache") {
      await Reset.cache(process.env.GROUPAROO_RUN_MODE);
    }

    log(`✅ Success!`);
    return true;
  }
}
