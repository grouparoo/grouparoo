import path from "path";
import { ConfigTemplate } from "../classes/configTemplate";

export class ApiKeyTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "apikey";
    this.description = "Config for a Grouparoo API Key";
    this.files = [
      path.join(
        __dirname,
        "..",
        "..",
        "public",
        "templates",
        "apiKeys",
        "*.template"
      ),
    ];
    this.destinationDir = "apiKeys";
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}
