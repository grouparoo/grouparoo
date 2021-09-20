import path from "path";
import { CLI } from "actionhero";
import { GrouparooCLI } from "../modules/cli";
import { getConfigDir, getParentPath } from "../modules/pluginDetails";
import { packageConfig } from "../modules/cloud";

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

    const configDir = await getConfigDir(true);
    const projectPath = getParentPath();

    const tarballPath = path.isAbsolute(params.output)
      ? params.output
      : path.join(projectPath, params.output);

    GrouparooCLI.logger.log(`Project directory: ${projectPath}`);
    GrouparooCLI.logger.log(`Config directory: ${configDir}`);

    const configArchive = await packageConfig(
      projectPath,
      configDir,
      tarballPath
    );

    GrouparooCLI.logger.log(`✅ Saved config archive to ${configArchive}`);

    return true;
  }
}
