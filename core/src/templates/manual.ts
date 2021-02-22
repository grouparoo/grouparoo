import path from "path";
import { ConfigTemplate } from "../classes/configTemplate";
import { PropertyTypes } from "..";

const templateRoot = path.join(
  __dirname,
  "..",
  "..",
  "public",
  "templates",
  "manual"
);

export class ManualAppTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "manual:app";
    this.description = "Config for a Grouparoo App with manual property values";
    this.inputs = {
      id: {
        required: true,
        description: `The name of this new App`,
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

export class ManualSourceTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "manual:source";
    this.description = "Config for a Grouparoo Source based on a Manual App";
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new Source`,
        formatter: (p) => this.formatId(p),
      },
      parent: {
        required: true,
        description: `The id of App to use, e.g: \`--parent manual_app\``,
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

export class ManualPropertyTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "manual:property";
    this.description =
      "Config for a Grouparoo Property based on a Manual Source";
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new Property`,
        formatter: (p) => this.formatId(p),
      },
      parent: {
        required: true,
        description: `The id of Source to use, e.g: \`--parent manual_source\``,
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
