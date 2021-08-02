import path from "path";
import { ConfigTemplate } from "@grouparoo/core";

const templateRoot = path.join(__dirname, "..", "..", "public", "templates");

export class CalculatedPropertyAppTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = `calculated-property:app`;
    this.description = `Config for a Calculated Property App`;
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
    params["__pluginName"] = this.name.split(":")[0];
    return this.mustacheAllFiles(params);
  }
}

export class CalculatedPropertySourceTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = `calculated-property:source`;
    this.description = `Config for a Calculated Property Source`;
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new Source`,
        formatter: (p) => this.formatId(p),
      },
      parent: {
        required: true,
        description: `The id of the App to use for this Source, e.g: \`--parent calculated_property_app\``,
      },
    };
    this.files = [path.join(templateRoot, "source", "file", "*.template")];
    this.destinationDir = "sources";
    this.parentId = "appId";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    // commenting out but saving just in case...
    // params["schedule_id"] = this.extendId("schedule");
    return this.mustacheAllFiles(params);
  }
}