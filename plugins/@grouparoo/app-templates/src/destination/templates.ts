import { ConfigTemplate, DestinationSyncMode } from "@grouparoo/core";

export class DestinationTemplate extends ConfigTemplate {
  constructor(
    name: string,
    files: string[],
    syncModes?: DestinationSyncMode[],
    defaultSyncMode?: DestinationSyncMode
  ) {
    super();
    this.name = `${name}:destination`;
    this.description = `Config for a ${name} Destination`;
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new Destination`,
        formatter: (p) => this.formatId(p),
      },
      parent: {
        required: true,
        description: `The id of the ${name} App to use for this Destination, e.g: \`--parent data_warehouse\``,
      },
    };

    if (syncModes && syncModes.length > 0) {
      this.inputs["syncMode"] = {
        required: false,
        default:
          defaultSyncMode || syncModes.length === 1 ? syncModes[0] : "...",
        description: `How should records sync to the destination? e.g. \`--sync-mode additive\`. ${
          "Options: " + syncModes.join(", ")
        }`,
      };
    }

    this.files = files;
    this.destinationDir = "destinations";
    this.parentId = "appId";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    return this.mustacheAllFiles(params);
  }
}
