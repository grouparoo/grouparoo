import path from "path";
import FormData from "form-data";
import { CLI, utils } from "actionhero";
import { mkdtemp, copy, remove, readFile } from "fs-extra";
import { GrouparooCLI } from "../modules/cli";
import { getConfigDir, getParentPath } from "../modules/pluginDetails";
import {
  CloudClient,
  CloudError,
  ConfigurationApiData,
  packageConfig,
} from "../modules/cloud";
import axios, { AxiosError } from "axios";

const CLOUD_API = "http://localhost:8080";

export class Deploy extends CLI {
  constructor() {
    super();
    this.name = "deploy";
    this.description =
      "Uploads current configuration to a Grouparoo Cloud project";
    this.inputs = {
      projectId: {
        required: true,
        description: "Grouparoo Cloud Project ID",
        letter: "p",
      },
      token: {
        required: false,
        description:
          "Grouparoo Cloud Organization Token. This can also be set by using the GROUPAROO_CLOUD_TOKEN environment variable.",
        letter: "t",
      },
      output: {
        required: false,
        default: "./grouparoo.tar.gz",
        description: "Where should we generate the archive?",
        letter: "o",
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
          `\nLogging output for ${job.type} job ${jobId}\n`
        )
      );
      GrouparooCLI.logger.log(job.logs);
      GrouparooCLI.logger.log("");
    }
  }

  async run({
    params,
  }: {
    params: { token?: string; projectId: string; output: string };
  }) {
    GrouparooCLI.logCLI(this.name);
    const configDir = await getConfigDir(true);
    const projectPath = getParentPath();
    const tarballPath = path.isAbsolute(params.output)
      ? params.output
      : path.join(projectPath, params.output);

    GrouparooCLI.logger.log(`Project directory: ${projectPath}`);
    GrouparooCLI.logger.log(`Config directory: ${configDir}`);
    GrouparooCLI.logger.log("");

    const configArchive = await packageConfig(
      projectPath,
      configDir,
      tarballPath
    );

    const cloudToken = params.token ?? process.env.GROUPAROO_CLOUD_TOKEN;
    if (!cloudToken)
      GrouparooCLI.logger.fatal(
        "You must provide a Grouparoo Cloud token to upload configuration. Use the --token argument or set the GROUPAROO_CLOUD_TOKEN environment variable to provide the auth token."
      );

    try {
      const toApply = false;
      const cloud = new CloudClient(params.projectId, cloudToken, CLOUD_API);
      const { id: configId } = await cloud.createConfiguration(
        configArchive,
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
        lastState = config.state;

        if (config.state === "finished") {
          GrouparooCLI.logger.log(
            `\nThe configuration has been successfully ${
              toApply ? "applied" : "validated"
            }!`
          );
          process.exit(0);
        }

        await utils.sleep(1000);
      }
    } catch (err) {
      GrouparooCLI.logger.fatal(err.message);
    }

    return true;
  }
}
