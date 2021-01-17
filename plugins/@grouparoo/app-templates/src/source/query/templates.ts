import path from "path";
import { ConfigTemplate, PropertyTypes } from "@grouparoo/core";

const templateRoot = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "public",
  "templates"
);

export class QuerySourceTemplate extends ConfigTemplate {
  constructor(
    name: string,
    files = [path.join(templateRoot, "query-source", "*.template")]
  ) {
    super();
    this.name = `${name}:query:source`;
    this.description = `Config for a ${name} Query Source`;
    this.files = files;
    this.destinationDir = "sources";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    return this.mustacheAllFiles(params);
  }
}

export class QueryScheduleTemplate extends ConfigTemplate {
  constructor(
    name: string,
    files = [path.join(templateRoot, "query-schedule", "*.template")]
  ) {
    super();
    this.name = `${name}:query:schedule`;
    this.description = `Config for a ${name} Query Schedule`;
    this.files = files;
    this.destinationDir = "schedules";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    return this.mustacheAllFiles(params);
  }
}

export class QueryPropertyTemplate extends ConfigTemplate {
  constructor(
    name: string,
    files = [path.join(templateRoot, "query-property", "*.template")]
  ) {
    super();
    this.name = `${name}:query:property`;
    this.description = `Config for a ${name} Query Property`;
    this.files = files;
    this.destinationDir = "properties";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    params["__typeOptions"] = PropertyTypes.map((v) => `"${v}"`).join(", ");
    return this.mustacheAllFiles(params);
  }
}
