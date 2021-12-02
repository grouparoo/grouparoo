import os from "os";
import path from "path";
import { utils } from "actionhero";
import { GrouparooCLI } from "./cli";
import { getConfigDir, getParentPath } from "./pluginDetails";
import { CloudClient, CloudError, packageConfig } from "./cloud";
import { mkdtemp, remove } from "fs-extra";

export namespace CloudCLI {
  export async function pack(output: string) {
    const configDir = await getConfigDir(true);
    const projectPath = getParentPath();

    const tarballPath = path.isAbsolute(output)
      ? output
      : path.join(projectPath, output);

    GrouparooCLI.logger.log(`Project directory: ${projectPath}`);
    GrouparooCLI.logger.log(`Config directory: ${configDir}`);

    const configArchive = await packageConfig(
      projectPath,
      configDir,
      tarballPath
    );

    GrouparooCLI.logger.log(`✅ Saved config archive to ${configArchive}`);
  }

  async function logJob(cloud: CloudClient, jobId: string) {
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

  export async function push(params: {
    token?: string;
    message?: string;
    externalUrl?: string;
    projectId: string;
    archivePath: string;
    apply: boolean | string;
  }) {
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
        toApply,
        params.message,
        params.externalUrl
      );

      let lastState: string;
      while (true) {
        const config = await cloud.getConfiguration(configId);
        if (config.errorMessage) {
          await logJob(cloud, config.applyJobId ?? config.validateJobId);

          GrouparooCLI.logger.fatal(
            `An error occurred while processing the config: ${config.errorMessage}`
          );
        }

        if (config.state !== lastState) {
          if (config.state === "validated") {
            await logJob(cloud, config.validateJobId);
          } else if (config.state === "applied") {
            await logJob(cloud, config.applyJobId);
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
      let prefix = "";
      if (err instanceof CloudError) prefix = "Grouparoo Cloud error: ";
      GrouparooCLI.logger.fatal(prefix + err.message);
    }
  }

  export async function packAndPush(params: {
    token?: string;
    message?: string;
    externalUrl?: string;
    projectId: string;
    apply: boolean | string;
  }) {
    const tempPath = await mkdtemp(path.join(os.tmpdir(), "grouparoo-cli-"));
    const archivePath = path.join(tempPath, "grouparoo.tar.gz");

    GrouparooCLI.logger.log("\n🛠 Building config archive...\n");

    await CloudCLI.pack(archivePath);

    GrouparooCLI.logger.log("\n☁️ Uploading config...\n");

    await CloudCLI.push({
      archivePath,
      token: params.token,
      projectId: params.projectId,
      message: params.message,
      externalUrl: params.externalUrl,
      apply: params.apply,
    });

    await remove(archivePath);
  }
}
