import { ConfigTemplate } from "@grouparoo/core";

export class DestinationTemplate extends ConfigTemplate {
  constructor(name: string, files: string[]) {
    super();
    this.name = `${name}:destination`;
    this.description = `Config for a ${name} Destination`;
    this.files = files;
    this.destinationDir = "destinations";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    return this.mustacheAllFiles(params);
  }
}
