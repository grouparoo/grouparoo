import path from "path";
import { ConfigTemplate } from "../classes/configTemplate";

export class CalculatedGroupTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.class = "group";
    this.name = "group:calculated";
    this.description = "Config for a calculated Grouparoo Group";
    this.rootPath = path.join(
      __dirname,
      "..",
      "..",
      "public",
      "templates",
      "groups"
    );
    this.files = [path.join("calculated", "*.template")];
    this.inputs = {
      id: {
        required: true,
        default: null,
        description: "The ID of this group, used to determine it's guid",
      },
      name: {
        required: true,
        default: "New Group",
        description: "The name of the Group",
      },
      rules: {
        required: true,
        default: "[]",
        description: "The rules for the group, JSON-encoded",
      },
    };
  }

  async run({ params }) {
    if (params.rules) {
      params.rules = JSON.parse(params.rules);
    }

    return this.mustacheAllFiles(params);
  }
}

export class ManualGroupTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.class = "group";
    this.name = "group:manual";
    this.description = "Config for a manual Grouparoo Group";
    this.rootPath = path.join(
      __dirname,
      "..",
      "..",
      "public",
      "templates",
      "groups"
    );
    this.files = [path.join("manual", "*.template")];
    this.inputs = {
      id: {
        required: true,
        default: null,
        description: "The ID of this group, used to determine it's guid",
      },
      name: {
        required: true,
        default: "New Group",
        description: "The name of the Group",
      },
    };
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}
