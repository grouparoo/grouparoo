import path from "path";
import { ConfigTemplate } from "../classes/configTemplate";

export class EventsAppTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.class = "app";
    this.name = "events:app";
    this.description = "Config for a Grouparoo App based on Events";
    this.rootPath = path.join(
      __dirname,
      "..",
      "..",
      "public",
      "templates",
      "events",
      "app"
    );
    this.files = [path.join("*.template")];
    this.inputs = {
      id: {
        required: true,
        default: null,
        description: "The ID of this App, used to determine it's guid",
      },
      name: {
        required: true,
        copyDefaultFrom: "id",
        description: "The name of the App",
      },
      "identifying-property-guid": {
        required: true,
        description:
          "The guid of the unique Property which will be linked up to the Identify Events",
      },
    };
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}
