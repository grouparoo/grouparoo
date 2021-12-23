import path from "path";
import {
  ConfigTemplate,
  ConfigTemplateParams,
} from "../classes/configTemplate";
import { plugin } from "../modules/plugin";

export class SettingTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "setting";
    this.description = "Config for a Grouparoo Setting";
    this.files = [
      path.join(
        __dirname,
        "..",
        "..",
        "public",
        "templates",
        "settings",
        "*.template"
      ),
    ];
    this.destinationDir = "settings";
    this.inputs = {
      "plugin-name": {
        required: true,
        description: "The name of the plugin which contains the Setting",
      },
      key: {
        required: true,
        description: "The Setting's key",
      },
      value: {
        required: true,
        description: "The Setting's value",
      },
    };
  }

  async run({ params }: { params: ConfigTemplateParams }) {
    if (params["plugin-name"] && params.key) {
      await plugin.readSetting(
        params["plugin-name"].toString(),
        params.key.toString()
      );
    }

    return this.mustacheAllFiles(params);
  }
}
