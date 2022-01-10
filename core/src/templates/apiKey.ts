import path from "path";
import {
  ConfigTemplate,
  ConfigTemplateParams,
} from "../classes/configTemplate";

export class ApiKeyTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "apikey";
    this.description = "Config for a Grouparoo API Key";
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new API Key`,
        formatter: (p) => this.formatId(p),
      },
    };
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

  async run({ params }: { params: ConfigTemplateParams }) {
    return this.mustacheAllFiles(params);
  }
}
