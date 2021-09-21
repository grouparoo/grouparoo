import { CLI } from "actionhero";
import { GrouparooCLI } from "../modules/cli";
import { Pack } from "./pack";
import { Push } from "./push";

export class CI extends CLI {
  constructor() {
    super();
    this.name = "ci";
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

    const pack = new Pack();
    await pack.run({ params: { output: "./auto-grouparoo.tar.gz" } });

    const push = new Push();
    await push.run({
      params: {
        token: params.token,
        projectId: params.projectId,
        archivePath: "./auto-grouparoo.tar.gz",
        apply: false,
      },
    });

    return true;
  }
}
