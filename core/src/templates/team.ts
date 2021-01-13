import path from "path";
import { ConfigTemplate } from "../classes/configTemplate";

export class TeamTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.class = "team";
    this.name = "team";
    this.description = "Config for a Grouparoo Team";
    this.rootPath = path.join(
      __dirname,
      "..",
      "..",
      "public",
      "templates",
      "teams"
    );
    this.files = [path.join("*.template")];
    this.inputs = {
      id: {
        required: true,
        description: "The ID of this Team, used to determine it's guid",
      },
      name: {
        required: true,
        copyDefaultFrom: "id",
        description: "The name of the Team",
      },
      "permission-all-read": {
        required: true,
        default: true,
        description: "Grant read permission to all topics for this Team",
        formatter: (p) => p.toLowerCase() === "true",
      },
      "permission-all-write": {
        required: true,
        default: false,
        description: "Grant write permission to all topics for this Team",
        formatter: (p) => p.toLowerCase() === "true",
      },
    };
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}
