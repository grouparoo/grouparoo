import path from "path";
import { ConfigTemplate } from "../classes/configTemplate";

export class TeamMemberTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "team:member";
    this.description = "Config for a Grouparoo Team Member";
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
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}
