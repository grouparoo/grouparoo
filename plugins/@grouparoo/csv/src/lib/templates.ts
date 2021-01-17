import path from "path";
import { ConfigTemplate, PropertyTypes } from "@grouparoo/core";

const templateRoot = path.join(__dirname, "..", "..", "public", "templates");

export class CSVAppTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = `csv:app`;
    this.description = `Config for a CSV App`;
    this.files = [path.join(templateRoot, "app", "*.template")];
    this.destinationDir = "apps";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    return this.mustacheAllFiles(params);
  }
}

export class CSVSourceTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = `csv:source`;
    this.description = `Config for a CSV Source`;
    this.files = [path.join(templateRoot, "source", "*.template")];
    this.destinationDir = "sources";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    return this.mustacheAllFiles(params);
  }
}

export class CSVScheduleTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = `csv:schedule`;
    this.description = `Config for a CSV Schedule`;
    this.files = [path.join(templateRoot, "schedule", "*.template")];
    this.destinationDir = "schedules";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    return this.mustacheAllFiles(params);
  }
}

export class CSVPropertyTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = `csv:property`;
    this.description = `Config for a CSV Property`;
    this.files = [path.join(templateRoot, "property", "*.template")];
    this.destinationDir = "properties";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    params["__typeOptions"] = PropertyTypes.map((v) => `"${v}"`).join(", ");
    return this.mustacheAllFiles(params);
  }
}
