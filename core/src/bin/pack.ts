import { CLI } from "actionhero";
import { GrouparooCLI } from "../modules/cli";
import { CloudCLI } from "../modules/cloudCli";

export class Pack extends CLI {
  constructor() {
    super();
    this.name = "pack";
    this.description = "Packages a grouparoo project into a .tar.gz archive";
    this.inputs = {
      output: {
        required: false,
        default: "./grouparoo.tar.gz",
        description: "Where should we generate the archive?",
        letter: "o",
      },
    };

    GrouparooCLI.timestampOption(this);
  }

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.setNextDevelopmentMode();
  };

  async run({ params }: { params: { output: string } }) {
    GrouparooCLI.logCLI(this.name);
    await CloudCLI.pack(params.output);
    return true;
  }
}
