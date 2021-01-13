import path from "path";
import { ConfigTemplate } from "../classes/configTemplate";

export class SettingTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.class = "setting";
    this.name = "setting";
    this.description = "Config for a Grouparoo Setting";
    this.rootPath = path.join(
      __dirname,
      "..",
      "..",
      "public",
      "templates",
      "settings"
    );
    this.files = [path.join("*.template")];
    this.inputs = {
      id: {
        required: true,
        description: "The ID of the Setting configuration",
      },
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

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}
