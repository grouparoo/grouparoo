import path from "path";
import { ConfigTemplate } from "../classes/configTemplate";
import { PropertyTypes } from "../..";

const templateRoot = path.join(
  __dirname,
  "..",
  "..",
  "public",
  "templates",
  "events"
);

export class EventsAppTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "events:app";
    this.description = "Config for a Grouparoo App based on Events";
    this.files = [path.join(templateRoot, "app", "*.template")];
    this.destinationDir = "apps";
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}

export class EventsSourceTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "events:source";
    this.description = "Config for a Grouparoo Source based on an Events App";
    this.files = [path.join(templateRoot, "source", "*.template")];
    this.destinationDir = "sources";
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}

export class EventsPropertyTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "events:property";
    this.description =
      "Config for a Grouparoo Property based on an Events Source";
    this.files = [path.join(templateRoot, "property", "*.template")];
    this.destinationDir = "properties";
  }

  async run({ params }) {
    params["__typeOptions"] = PropertyTypes.map((v) => `"${v}"`).join(", ");
    return this.mustacheAllFiles(params);
  }
}
