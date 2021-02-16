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

export class GoogleSheetAppTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = `google-sheets:app`;
    this.description = `Config for a Google Sheets App`;
    this.files = [path.join(templateRoot, "app", "*.template")];
    this.destinationDir = "apps";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    return this.mustacheAllFiles(params);
  }
}

export class GoogleSheetSourceTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = `google-sheets:source`;
    this.description = `Config for a Google Sheets Source`;
    this.files = [path.join(templateRoot, "source", "*.template")];
    this.destinationDir = "sources";
    this.parentId = "appId";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    params["schedule_id"] = this.extendId("schedule");
    return this.mustacheAllFiles(params);
  }
}

export class GoogleSheetPropertyTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = `google-sheets:property`;
    this.description = `Config for a Google Sheets Property`;
    this.files = [path.join(templateRoot, "property", "*.template")];
    this.destinationDir = "properties";
    this.parentId = "sourceId";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    params["__typeOptions"] = PropertyTypes.map((v) => `"${v}"`).join(", ");
    return this.mustacheAllFiles(params);
  }
}
