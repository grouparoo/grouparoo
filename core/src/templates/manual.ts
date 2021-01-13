import path from "path";
import { ConfigTemplate } from "../classes/configTemplate";

export class ManualAppTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.class = "app";
    this.name = "manual:app";
    this.description = "Config for a Grouparoo App with manual property values";
    this.rootPath = path.join(
      __dirname,
      "..",
      "..",
      "public",
      "templates",
      "manual",
      "app"
    );
    this.files = [path.join("*.template")];
    this.inputs = {
      id: {
        required: true,
        default: null,
        description: "The ID of this App, used to determine it's guid",
      },
      name: {
        required: true,
        copyDefaultFrom: "id",
        description: "The name of the App",
      },
    };
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}
