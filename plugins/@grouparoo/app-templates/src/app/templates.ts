import { ConfigTemplate } from "@grouparoo/core";

export class AppTemplate extends ConfigTemplate {
  constructor(name: string, files: string[]) {
    super();
    this.name = `${name}:app`;
    this.description = `Config for a Grouparoo ${name} App`;
    this.files = files;
    this.destinationDir = "apps";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    return this.mustacheAllFiles(params);
  }
}
