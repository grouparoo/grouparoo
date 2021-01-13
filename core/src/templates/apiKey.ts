import path from "path";
import { ConfigTemplate } from "../classes/configTemplate";

export class ApiKeyTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.class = "apiKey";
    this.name = "api-key";
    this.description = "Config for a Grouparoo API Key";
    this.rootPath = path.join(
      __dirname,
      "..",
      "..",
      "public",
      "templates",
      "apiKeys"
    );
    this.files = [path.join("*.template")];
    this.inputs = {
      id: {
        required: true,
        description: "The ID of this API Key, used to determine the guid",
      },
      name: {
        required: true,
        copyDefaultFrom: "id",
        description: "The name of the API Key",
      },
      "permission-all-read": {
        required: true,
        default: true,
        description: "Grant read permission to all topics for this API Key",
        formatter: (p) => p.toLowerCase() === "true",
      },
      "permission-all-write": {
        required: true,
        default: false,
        description: "Grant write permission to all topics for this API Key",
        formatter: (p) => p.toLowerCase() === "true",
      },
    };
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}
