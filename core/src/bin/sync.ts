import { GrouparooCLI } from "../modules/cli";
import { GrouparooRecord, RecordProperty, Property } from "..";
import { CLI, ParamsFrom } from "actionhero";
import { Op } from "sequelize";

export class SyncCLI extends CLI {
  name = "sync <recordProperty>";
  description =
    "Sync (import & export) a GrouparooRecord.  You can provide a GrouparooRecord id or a unique GrouparooRecord Property";
  inputs = {
    property: {
      description:
        "Choose the name of the Property to find the GrouparooRecord by (i.e.: email_address)",
      letter: "p",
    },
    "no-export": {
      default: false,
      description: "Skip exporting the record",
      letter: "n",
      flag: true,
    },
  };
  example = `grouparoo sync person@example.com --property email`;

  constructor() {
    super();
    GrouparooCLI.timestampOption(this);
    GrouparooCLI.jsonOption(this);
  }

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.setNextDevelopmentMode();
  };

  async run({
    params,
  }: {
    params: ParamsFrom<SyncCLI> & {
      export?: boolean;
      recordProperty?: string;
      json?: string;
      _arguments: string[];
    };
  }) {
    const [recordProperty] = params._arguments || [];
    if (recordProperty) params.recordProperty = recordProperty;

    if (!params.recordProperty) {
      return GrouparooCLI.logger.fatal("No GrouparooRecord Property provided");
    }

    if (typeof params.property === "boolean") {
      return GrouparooCLI.logger.fatal("Provide the property's name");
    }

    if (!params.json) {
      GrouparooCLI.logCLI(
        this.name.replace(
          " <recordProperty>",
          params.recordProperty ? " " + params.recordProperty : ""
        )
      );
    }

    const uniqueProperties = (
      await Property.findAll({ where: { unique: true } })
    ).filter((p) => (params.property ? p.key === params.property : true));

    const recordProperties = await RecordProperty.findAll({
      where: {
        rawValue: params.recordProperty,
        propertyId: { [Op.in]: uniqueProperties.map((p) => p.id) },
      },
    });

    const wheres = [];
    if (recordProperties.length > 1) {
      return GrouparooCLI.logger.fatal(
        `More than one GrouparooRecord found with GrouparooRecord Property "${params.recordProperty}".  Please provide [property]`
      );
    } else if (recordProperties.length === 1) {
      wheres.push({ id: recordProperties[0].recordId });
    } else {
      wheres.push({ id: params.recordProperty });
    }

    const record = await GrouparooRecord.findOne({
      where: { [Op.or]: wheres },
    });

    if (!record) {
      return GrouparooCLI.logger.fatal(
        params.property
          ? `Cannot find GrouparooRecord where GrouparooRecord Property "${params.property}"="${params.recordProperty}"`
          : `Cannot find GrouparooRecord with id or unique GrouparooRecord Property "${params.recordProperty}"`
      );
    }

    const { properties, groups, exports } = await record.snapshot(
      params.export
    );

    if (params.json) {
      GrouparooCLI.logger.log(JSON.stringify({ properties, groups, exports }));
    } else {
      const propertyStatus: Record<string, any> = {};
      const groupStatus: Record<string, any> = {};
      const exportStatus: Record<string, any> = {};
      for (const k in properties)
        propertyStatus[k] = [properties[k].values.join(", ")];
      for (const i in groups) groupStatus[groups[i].name] = [];
      for (const i in exports) {
        exportStatus[exports[i].destinationName + ": Properties"] = [
          Object.keys(exports[i].newRecordProperties)
            .map((k) => `${k}: ${exports[i].newRecordProperties[k]}`)
            .join(", "),
        ];
        exportStatus[exports[i].destinationName + ": Groups"] = [
          exports[i].newGroups.join(", "),
        ];
      }

      GrouparooCLI.logger.status(
        `GrouparooRecord`,
        [
          {
            header: "Info",
            status: {
              id: [record.id],
              createdAt: [record.createdAt.toISOString()],
              state: [record.state],
            },
          },
          { header: "GrouparooRecord Properties", status: propertyStatus },
          { header: "Groups", status: groupStatus },
          {
            header: params.export ? "Exports" : "Next Exports",
            status: exportStatus,
          },
        ],
        record.id
      );
    }

    return true;
  }
}
