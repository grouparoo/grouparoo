import path from "path";
import { ConfigTemplate } from "../classes/configTemplate";

export class TeamTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "team";
    this.description = "Config for a Grouparoo Team";
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

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}
