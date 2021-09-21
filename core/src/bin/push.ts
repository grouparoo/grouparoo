import path from "path";
import { CLI, utils } from "actionhero";
import { GrouparooCLI } from "../modules/cli";
import { getParentPath } from "../modules/pluginDetails";
import { CloudClient } from "../modules/cloud";

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
    const projectPath = getParentPath();
    const tarballPath = path.isAbsolute(params.archivePath)
      ? params.archivePath
      : path.join(projectPath, params.archivePath);

    const cloudToken = params.token ?? process.env.GROUPAROO_CLOUD_API_TOKEN;
    if (!cloudToken)
      GrouparooCLI.logger.fatal(
        "You must provide a Grouparoo Cloud token to upload configuration. Use the --token argument or set the GROUPAROO_CLOUD_TOKEN environment variable to provide the auth token."
      );

    try {
      const toApply = params.apply !== "false" && Boolean(params.apply);
      const cloud = new CloudClient(params.projectId, cloudToken);
      const { id: configId } = await cloud.createConfiguration(
        tarballPath,
        toApply
      );

      let lastState: string;
      while (true) {
        const config = await cloud.getConfiguration(configId);
        if (config.errorMessage) {
          await this.logJob(cloud, config.applyJobId ?? config.validateJobId);

          GrouparooCLI.logger.fatal(
            `An error occurred while processing the config: ${config.errorMessage}`
          );
        }

        if (config.state !== lastState) {
          if (config.state === "validated") {
            await this.logJob(cloud, config.validateJobId);
          } else if (config.state === "applied") {
            await this.logJob(cloud, config.applyJobId);
          }
          GrouparooCLI.logger.log(`Configuration ${config.state}...`);
        }

        if (config.state === "finished") {
          GrouparooCLI.logger.log(
            `\nThe configuration has been successfully ${
              toApply ? "applied" : "validated"
            }!`
          );

          break;
        }

        lastState = config.state;
        await utils.sleep(1000);
      }
    } catch (err) {
      GrouparooCLI.logger.fatal(err.message);
    }

    return true;
  }
}
