import { GrouparooCLI } from "../modules/cli";
import { CLI } from "actionhero";
import { Reset } from "../modules/reset";

export class ResetCLI extends CLI {
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
      this.name.replace(" <mode>", params.mode ? " " + params.mode : ""),
      false
    );

    if (!params.confirm) {
      return GrouparooCLI.logger.fatal(`You need to --confirm this command`);
    }

    const callerId = `cli:reset`;
    if (params.mode === "cluster") {
      await Reset.cluster(callerId);
    } else if (params.mode === "data") {
      await Reset.data(callerId);
      await Reset.resetHighWatermarks();
    } else if (params.mode === "cache") {
      await Reset.cache(callerId);
    } else {
      return GrouparooCLI.logger.fatal("mode not found");
    }

    GrouparooCLI.logger.log(`✅ Success!`);
    return true;
  }
}
