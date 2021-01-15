import path from "path";
import { ConfigTemplate, PropertyTypes } from "@grouparoo/core";
import { AggregationMethod, FilterOperation } from "./";

const templateRoot = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "public",
  "templates"
);

export class TableSourceTemplate extends ConfigTemplate {
  constructor(
    name: string,
    files = [path.join(templateRoot, "table-source", "*.template")]
  ) {
    super();
    this.name = `${name}:table:source`;
    this.description = `Config for a ${name} Table Source`;
    this.files = files;
    this.destinationDir = "sources";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    return this.mustacheAllFiles(params);
  }
}

export class TableScheduleTemplate extends ConfigTemplate {
  constructor(
    name: string,
    files = [path.join(templateRoot, "table-schedule", "*.template")]
  ) {
    super();
    this.name = `${name}:table:schedule`;
    this.description = `Config for a ${name} Table Schedule`;
    this.files = files;
    this.destinationDir = "schedules";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    return this.mustacheAllFiles(params);
  }
}

export class TablePropertyTemplate extends ConfigTemplate {
  constructor(
    name: string,
    files = [path.join(templateRoot, "table-property", "*.template")]
  ) {
    super();
    this.name = `${name}:table:property`;
    this.description = `Config for a ${name} Table Property`;
    this.files = files;
    this.destinationDir = "properties";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    params["__typeOptions"] = PropertyTypes.map((v) => `"${v}"`).join(", ");
    params["__aggregationMethodOptions"] = Object.values(AggregationMethod)
      .map((v) => `"${v}"`)
      .join(", ");
    params["__filterOptions"] = Object.values(FilterOperation).join(", ");
    return this.mustacheAllFiles(params);
  }
}
