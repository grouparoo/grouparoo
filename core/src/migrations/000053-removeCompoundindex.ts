import Sequelize from "sequelize";
import { MigrationUtils } from "../utils/migration";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    const dialect = MigrationUtils.getDialect(queryInterface);

    if (dialect === "sqlite") {
      await queryInterface.removeIndex(
        "groupMembers",
        ["profileGuid", "groupGuid"],
        {
          unique: true,
          fields: ["profileGuid", "groupGuid"],
        }
      );

      await queryInterface.removeIndex(
        "mappings",
        ["ownerGuid", "profilePropertyRuleGuid"],
        {
          unique: true,
          fields: ["ownerGuid", "profilePropertyRuleGuid"],
        }
      );

      await queryInterface.removeIndex("mappings", ["ownerGuid", "remoteKey"], {
        unique: true,
        fields: ["ownerGuid", "remoteKey"],
      });

      await queryInterface.removeIndex("options", ["ownerGuid", "key"], {
        unique: true,
        fields: ["ownerGuid", "key"],
      });

      await queryInterface.removeIndex(
        "profileProperties",
        ["profileGuid", "profilePropertyRuleGuid", "position"],
        {
          unique: true,
          fields: ["profileGuid", "profilePropertyRuleGuid", "position"],
        }
      );

      await queryInterface.removeIndex("settings", ["pluginName", "key"], {
        unique: true,
        fields: ["pluginName", "key"],
      });

      await queryInterface.removeIndex(
        "destinationGroupMemberships",
        ["destinationGuid", "groupGuid"],
        {
          unique: true,
          fields: ["destinationGuid", "groupGuid"],
        }
      );

      await queryInterface.removeIndex(
        "destinationGroupMemberships",
        ["destinationGuid", "remoteKey"],
        {
          unique: true,
          fields: ["destinationGuid", "remoteKey"],
        }
      );

      await queryInterface.removeIndex("permissions", ["ownerGuid", "topic"], {
        unique: true,
        fields: ["ownerGuid", "topic"],
      });
    }
  },

  async down() {
    throw new Error("irreversible migration");
  },
};
