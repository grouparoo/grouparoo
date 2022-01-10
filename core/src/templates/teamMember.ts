import path from "path";
import {
  ConfigTemplate,
  ConfigTemplateParams,
} from "../classes/configTemplate";

export class TeamMemberTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "team:member";
    this.description = "Config for a Grouparoo Team Member";
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new Team Member`,
        formatter: (p) => this.formatId(p),
      },
      parent: {
        required: true,
        description: `The id of Team to use, e.g: \`--parent admin_team\``,
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
        "teamMembers",
        "*.template"
      ),
    ];
    this.destinationDir = "teamMembers";
    this.parentId = "teamId";
  }

  async run({ params }: { params: ConfigTemplateParams }) {
    return this.mustacheAllFiles(params);
  }
}
