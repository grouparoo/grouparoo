import path from "path";
import { ConfigTemplate } from "../classes/configTemplate";

export class ManualAppTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "manual:app";
    this.description = "Config for a Grouparoo App with manual property values";
    this.files = [
      path.join(
        __dirname,
        "..",
        "..",
        "public",
        "templates",
        "manual",
        "app",
        "*.template"
      ),
    ];
    this.destinationDir = "apps";
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}
