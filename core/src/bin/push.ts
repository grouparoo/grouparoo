import { CLI } from "actionhero";
import { GrouparooCLI } from "../modules/cli";
import { CloudClient } from "../modules/cloud";
import { CloudCLI } from "../modules/cloudCli";

export class Push extends CLI {
  constructor() {
    super();
    this.name = "push";
    this.description =
      "Uploads a packaged configuration to a Grouparoo Cloud project";
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
      archivePath: {
        required: false,
        default: "./grouparoo.tar.gz",
        description:
          "Path to the .tar.gz file that contains the configuration to upload.",
        letter: "c",
      },
      apply: {
        required: false,
        default: false,
        description: "Should the changes be applied?",
        letter: "a",
      },
    };

    GrouparooCLI.timestampOption(this);
  }

  preInitialize() {
    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.setNextDevelopmentMode();
  }

  async logJob(cloud: CloudClient, jobId: string) {
    if (jobId) {
      const job = await cloud.getJob(jobId);
      GrouparooCLI.logger.log(
        GrouparooCLI.logger.cyanBold(
          `\nLogging output for ${job.type} job (${jobId})\n`
        )
      );
      GrouparooCLI.logger.log(job.logs);
      GrouparooCLI.logger.log("");
    }
  }

  async run({
    params,
  }: {
    params: {
      token?: string;
      projectId: string;
      archivePath: string;
      apply: boolean | string;
    };
  }) {
    GrouparooCLI.logCLI(this.name);
    await CloudCLI.push(params);
    return true;
  }
}
