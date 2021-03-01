import path from "path";
import { ConfigTemplate } from "../classes/configTemplate";
import { PropertyTypes } from "..";

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
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new App`,
        formatter: (p) => this.formatId(p),
      },
    };
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
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new App`,
        formatter: (p) => this.formatId(p),
      },
      parent: {
        required: true,
        description: `The id of the Events App to use, e.g: \`--parent events_app\``,
        formatter: (p) => this.formatId(p),
      },
    };
    this.files = [path.join(templateRoot, "source", "*.template")];
    this.destinationDir = "sources";
    this.parentId = "appId";
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
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new Property`,
        formatter: (p) => this.formatId(p),
      },
      parent: {
        required: true,
        description: `The id of Source to use, e.g: \`--parent events_source`,
        formatter: (p) => this.formatId(p),
      },
    };
    this.files = [path.join(templateRoot, "property", "*.template")];
    this.destinationDir = "properties";
    this.parentId = "sourceId";
  }

  async run({ params }) {
    params["__typeOptions"] = PropertyTypes.map((v) => `"${v}"`).join(", ");
    return this.mustacheAllFiles(params);
  }
}
