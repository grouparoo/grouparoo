import path from "path";
import {
  ConfigTemplate,
  ConfigTemplateParams,
} from "../classes/configTemplate";

export class TeamTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "team";
    this.description = "Config for a Grouparoo Team";
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new Team`,
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
        "teams",
        "*.template"
      ),
    ];
    this.destinationDir = "teams";
  }

  async run({ params }: { params: ConfigTemplateParams }) {
    return this.mustacheAllFiles(params);
  }
}
