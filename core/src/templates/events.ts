import path from "path";
import { ConfigTemplate } from "../classes/configTemplate";

export class EventsAppTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "events:app";
    this.description = "Config for a Grouparoo App based on Events";
    this.files = [
      path.join(
        __dirname,
        "..",
        "..",
        "public",
        "templates",
        "events",
        "app",
        "*.template"
      ),
    ];
    this.destinationDir = "apps";
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}
