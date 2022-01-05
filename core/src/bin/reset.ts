import { GrouparooCLI } from "../modules/cli";
import { CLI, ParamsFrom } from "actionhero";
import { Reset } from "../modules/reset";
import { CLS } from "../modules/cls";

export class ResetCLI extends CLI {
  name = "reset <mode>";
  description =
    "Reset part of this Cluster. Mode can be `cluster` (all data), `data` (imported data) and `cache`";
  inputs = {
    confirm: {
      required: false,
      default: false,
      flag: true,
      letter: "c",
      description: "Confirm the command",
    },
  };

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.setNextDevelopmentMode();
  };

  async run({
    params,
  }: {
    params: Partial<
      ParamsFrom<ResetCLI> & { mode?: string; _arguments: string[] }
    >;
  }) {
    const [mode] = params._arguments || [];
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
      await CLS.wrap(async () => await Reset.cluster(callerId));
    } else if (params.mode === "data") {
      await CLS.wrap(async () => await Reset.data(callerId));
      await CLS.wrap(async () => await Reset.resetHighWatermarks());
    } else if (params.mode === "cache") {
      await CLS.wrap(async () => await Reset.cache(callerId));
    } else {
      return GrouparooCLI.logger.fatal("mode not found");
    }

    GrouparooCLI.logger.log(`✅ Success!`);
    return true;
  }
}
