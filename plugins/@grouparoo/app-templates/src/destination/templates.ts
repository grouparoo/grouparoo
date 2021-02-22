import { ConfigTemplate } from "@grouparoo/core";

export class DestinationTemplate extends ConfigTemplate {
  constructor(name: string, files: string[]) {
    super();
    this.name = `${name}:destination`;
    this.description = `Config for a ${name} Destination`;
    this.inputs = {
      id: {
        required: true,
        description: `The name of this new Destination`,
        formatter: (p) => this.formatId(p),
      },
      parent: {
        required: true,
        description: `The name of the ${name} App to use for this Source, e.g: \`--parent data_warehouse\``,
      },
    };
    this.files = files;
    this.destinationDir = "destinations";
    this.parentId = "appId";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    return this.mustacheAllFiles(params);
  }
}
