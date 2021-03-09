import { GrouparooCLI } from "../modules/cli";
import { Profile, ProfileProperty, Property } from "..";
import { CLI } from "actionhero";
import { Op } from "sequelize";

export class SyncCLI extends CLI {
  constructor() {
    super();
    this.name = "sync <profileProperty>";
    this.description =
      "Sync (import & export) a Profile.  You can provide a Profile id or a unique Profile Property";
    this.inputs = {
      property: {
        description:
          "Choose the name of the Property to find the Profile by (i.e.: email_address)",
        letter: "p",
      },
      "no-export": {
        default: false,
        description: "Skip exporting the profile",
        letter: "n",
        flag: true,
      },
    };
    this.example = `grouparoo sync person@example.com --property email`;

    GrouparooCLI.timestampOption(this);
    GrouparooCLI.jsonOption(this);
  }

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
  };

  async run({ params }) {
    const [profileProperty] = params._arguments || [];
    if (profileProperty) params.profileProperty = profileProperty;

    if (!params.profileProperty) {
      return GrouparooCLI.logger.fatal("No Profile Property provided");
    }

    if (typeof params.property === "boolean") {
      return GrouparooCLI.logger.fatal("Provide the property's name");
    }

    if (!params.json) {
      GrouparooCLI.logCLI(
        this.name.replace(
          " <profileProperty>",
          params.profileProperty ? " " + params.profileProperty : ""
        )
      );
    }

    const uniqueProperties = (
      await Property.findAll({ where: { unique: true } })
    ).filter((p) => (params.property ? p.key === params.property : true));

    const profileProperties = await ProfileProperty.findAll({
      where: {
        rawValue: params.profileProperty,
        propertyId: { [Op.in]: uniqueProperties.map((p) => p.id) },
      },
    });

    const wheres = [];
    if (profileProperties.length > 1) {
      return GrouparooCLI.logger.fatal(
        `More than one Profile found with Profile Property "${params.profileProperty}".  Please provide [property]`
      );
    } else if (profileProperties.length === 1) {
      wheres.push({ id: profileProperties[0].profileId });
    } else {
      wheres.push({ id: params.profileProperty });
    }

    const profile = await Profile.findOne({ where: { [Op.or]: wheres } });

    if (!profile) {
      return GrouparooCLI.logger.fatal(
        params.property
          ? `Cannot find Profile where Profile Property "${params.property}"="${params.profileProperty}"`
          : `Cannot find Profile with id or unique Profile Property "${params.profileProperty}"`
      );
    }

    const { properties, groups, exports } = await profile.snapshot(
      params.export
    );

    if (params.json) {
      GrouparooCLI.logger.log(JSON.stringify({ properties, groups, exports }));
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

      GrouparooCLI.logger.status(
        `Profile`,
        [
          {
            header: "Info",
            status: {
              id: [profile.id],
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
        profile.id
      );
    }

    return true;
  }
}
