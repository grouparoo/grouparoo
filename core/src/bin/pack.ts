import { CLI, ParamsFrom, rebuildConfig } from "actionhero";
import { GrouparooCLI } from "../modules/cli";
import { CloudCLI } from "../modules/cloudCli";

export class Pack extends CLI {
  name = "pack";
  description = "Packages a grouparoo project into a .tar.gz archive";
  inputs = {
    output: {
      required: false,
      default: "./grouparoo.tar.gz",
      description: "Where should we generate the archive?",
      letter: "o",
    },
  };

  constructor() {
    super();
    GrouparooCLI.timestampOption(this);
  }

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.setNextDevelopmentMode();
  };

  preRun = async () => rebuildConfig();

  async run({ params }: { params: ParamsFrom<Pack> }) {
    GrouparooCLI.logCLI(this.name);
    await CloudCLI.pack(params.output);
    return true;
  }
}
