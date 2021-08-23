import { config } from "actionhero";

import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    if (config.sequelize?.dialect === "sqlite") {
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

  down: async function () {
    throw new Error("irreversible migration");
  },
};
