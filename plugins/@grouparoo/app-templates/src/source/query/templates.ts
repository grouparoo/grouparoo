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
    this.description = `Config for a ${name} query Source. Work with multiple tables and build custom queries for its properties.`;
    this.files = files;
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new Source`,
        formatter: (p) => this.formatId(p),
      },
      parent: {
        required: true,
        description: `The id of the ${name} App to use for this Source, e.g: \`--parent data_warehouse\``,
      },
    };
    this.destinationDir = "sources";
    this.parentId = "appId";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    params["schedule_id"] = this.extendId("schedule");
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
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new Property`,
        formatter: (p) => this.formatId(p),
      },
      parent: {
        required: true,
        description: `The id of the ${name} Source to use for this Property, e.g: \`--parent query_source\``,
      },
    };
    this.files = files;
    this.destinationDir = "properties";
    this.parentId = "sourceId";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    params["__typeOptions"] = PropertyTypes.map((v) => `"${v}"`).join(", ");
    return this.mustacheAllFiles(params);
  }
}
