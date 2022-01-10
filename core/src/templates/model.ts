import path from "path";
import {
  ConfigTemplate,
  ConfigTemplateParams,
} from "../classes/configTemplate";

export class ModelTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "model";
    this.description = "Config for a Grouparoo Model";
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new model`,
        formatter: (p) => this.formatId(p),
      },
      type: {
        required: false,
        description: `The type of this new model`,
        default: "profile",
      },
    };
    this.files = [
      path.join(
        __dirname,
        "..",
        "..",
        "public",
        "templates",
        "models",
        "*.template"
      ),
    ];
    this.destinationDir = "models";
  }

  async run({ params }: { params: ConfigTemplateParams }) {
    return this.mustacheAllFiles(params);
  }
}
