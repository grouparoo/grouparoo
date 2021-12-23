import path from "path";
import {
  ConfigTemplate,
  ConfigTemplateParams,
} from "../classes/configTemplate";

export class GroupTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "group";
    this.description = "Config for a Grouparoo Group";
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new Property`,
        formatter: (p) => this.formatId(p),
      },
      modelId: {
        required: true,
        description: `The id of the Model that the Records in this Group belong to`,
        default: "mod_profiles",
      },
    };
    this.files = [
      path.join(
        __dirname,
        "..",
        "..",
        "public",
        "templates",
        "groups",
        "*.template"
      ),
    ];
    this.destinationDir = "groups";
  }

  async run({ params }: { params: ConfigTemplateParams }) {
    if (params.rules) params.rules = JSON.parse(params.rules.toString());

    return this.mustacheAllFiles(params);
  }
}
