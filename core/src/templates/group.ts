import path from "path";
import { ConfigTemplate } from "../classes/configTemplate";

export class CalculatedGroupTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "group:calculated";
    this.description = "Config for a calculated Grouparoo Group";
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new Property`,
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
        "groups",
        "calculated",
        "*.template"
      ),
    ];
    this.destinationDir = "groups";
  }

  async run({ params }) {
    if (params.rules) params.rules = JSON.parse(params.rules);

    return this.mustacheAllFiles(params);
  }
}

export class ManualGroupTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "group:manual";
    this.description = "Config for a manual Grouparoo Group";
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new Property`,
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
        "groups",
        "manual",
        "*.template"
      ),
    ];
    this.destinationDir = "groups";
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}
