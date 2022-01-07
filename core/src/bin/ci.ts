import { CLI, ParamsFrom } from "actionhero";
import { GrouparooCLI } from "../modules/cli";
import { CloudCLI } from "../modules/cloudCli";

export class CI extends CLI {
  name = "ci";
  description = "Packages and applies config";
  inputs = {
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
    message: {
      required: false,
      description: "Optional message to describe the Configuration.",
      letter: "m",
    },
    externalUrl: {
      required: false,
      description: "Optional external url attached to the Configuration.",
      letter: "u",
    },
  };

  constructor() {
    super();
    GrouparooCLI.timestampOption(this);
  }

  preInitialize() {
    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.setNextDevelopmentMode();
  }

  async run({ params }: { params: Partial<ParamsFrom<CI>> }) {
    GrouparooCLI.logCLI(this.name);
    await CloudCLI.packAndPush({ ...params, apply: false });
    return true;
  }
}
