import { GrouparooCLI } from "../modules/cli";
import { Profile, ProfileProperty, Property } from "..";
import { CLI, log } from "actionhero";
import { Op } from "sequelize";

export class Validate extends CLI {
  constructor() {
    super();
    this.name = "sync <profileProperty>";
    this.description =
      "Sync (import & export) a Profile.  You can provide a Profile guid or a unique Profile Property";
    this.inputs = {
      "no-export": {
        default: false,
        description: "Skip exporting the profile",
        letter: "n",
        flag: true,
      },
      json: {
        default: false,
        description: "Display resulting profile information as JSON?",
        letter: "j",
        flag: true,
      },
    };

    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.timestampOption(this);
  }

  async run({ params }) {
    const [profileProperty] = params._arguments || [];
    if (profileProperty) params.profileProperty = profileProperty;

    GrouparooCLI.logCLI(
      this.name.replace(
        " <profileProperty>",
        params.profileProperty ? " " + params.profileProperty : ""
      )
    );

    const uniqueProperties = await Property.findAll({
      attributes: ["guid"],
      where: { unique: true },
    });

    const profileProperties = await ProfileProperty.findAll({
      where: {
        rawValue: params.profileProperty,
        propertyGuid: { [Op.in]: uniqueProperties.map((p) => p.guid) },
      },
    });

    const wheres = [];
    if (profileProperties.length === 1) {
      wheres.push({ guid: profileProperties[0].profileGuid });
    } else {
      wheres.push({ guid: params.profileProperty });
    }

    const profile = await Profile.findOne({ where: { [Op.or]: wheres } });

    if (!profile) {
      return this.fatalError(
        `Cannot find Profile with guid or unique Profile Property "${params.profileProperty}"`
      );
    }

    const { properties, groups, exports } = await profile.snapshot(
      true,
      params.export
    );

    if (params.json) {
      console.log(
        JSON.stringify(
          {
            properties,
            groups,
            exports,
          },
          null,
          2
        )
      );
    } else {
      const propertyStatus = {};
      const groupStatus = {};
      const exportStatus = {};
      for (const k in properties)
        propertyStatus[k] = [properties[k].values.join(", ")];
      for (const i in groups) groupStatus[groups[i].name] = [];
      for (const i in exports) {
        exportStatus[exports[i].destinationName + ": Properties"] = [
          Object.keys(exports[i].newProfileProperties)
            .map((k) => `${k}: ${exports[i].newProfileProperties[k]}`)
            .join(", "),
        ];
        exportStatus[exports[i].destinationName + ": Groups"] = [
          exports[i].newGroups.join(", "),
        ];
      }

      GrouparooCLI.logStatus(
        `Profile`,
        [
          {
            header: "Info",
            status: {
              guid: [profile.guid],
              createdAt: [profile.createdAt.toISOString()],
              state: [profile.state],
            },
          },
          { header: "Profile Properties", status: propertyStatus },
          { header: "Groups", status: groupStatus },
          {
            header: params.export ? "Exports" : "Next Exports",
            status: exportStatus,
          },
        ],
        profile.guid
      );
    }

    return true;
  }

  fatalError(message: string) {
    console.error("❌ " + message);
    if (process.env.NODE_ENV !== "test") process.exit(1);
    return true;
  }
}
