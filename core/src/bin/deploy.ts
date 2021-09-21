import { CLI } from "actionhero";
import { GrouparooCLI } from "../modules/cli";
import { CloudCLI } from "../modules/cloudCli";

export class Deploy extends CLI {
  constructor() {
    super();
    this.name = "deploy";
    this.description = "Packages and applies config";
    this.inputs = {
      projectId: {
        required: true,
        description: "Grouparoo Cloud Project ID",
        letter: "p",
      },
      token: {
        required: false,
        description:
          "Grouparoo Cloud Organization Token. This can also be set by using the GROUPAROO_CLOUD_API_TOKEN environment variable.",
        letter: "t",
      },
    };

    GrouparooCLI.timestampOption(this);
  }

  preInitialize() {
    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.setNextDevelopmentMode();
  }

  async run({
    params,
  }: {
    params: {
      token?: string;
      projectId: string;
    };
  }) {
    GrouparooCLI.logCLI(this.name);
    await CloudCLI.packAndPush({ ...params, apply: true });
    return true;
  }
}
