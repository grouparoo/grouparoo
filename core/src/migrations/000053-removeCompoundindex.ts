import { config } from "actionhero";

export default {
  up: async function (migration, DataTypes) {
    if (config.sequelize?.dialect === "sqlite") {
      await migration.removeIndex(
        "groupMembers",
        ["profileGuid", "groupGuid"],
        {
          unique: true,
          fields: ["profileGuid", "groupGuid"],
        }
      );

      await migration.removeIndex(
        "mappings",
        ["ownerGuid", "profilePropertyRuleGuid"],
        {
          unique: true,
          fields: ["ownerGuid", "profilePropertyRuleGuid"],
        }
      );

      await migration.removeIndex("mappings", ["ownerGuid", "remoteKey"], {
        unique: true,
        fields: ["ownerGuid", "remoteKey"],
      });

      await migration.removeIndex("options", ["ownerGuid", "key"], {
        unique: true,
        fields: ["ownerGuid", "key"],
      });

      await migration.removeIndex(
        "profileProperties",
        ["profileGuid", "profilePropertyRuleGuid", "position"],
        {
          unique: true,
          fields: ["profileGuid", "profilePropertyRuleGuid", "position"],
        }
      );

      await migration.removeIndex("settings", ["pluginName", "key"], {
        unique: true,
        fields: ["pluginName", "key"],
      });

      await migration.removeIndex(
        "destinationGroupMemberships",
        ["destinationGuid", "groupGuid"],
        {
          unique: true,
          fields: ["destinationGuid", "groupGuid"],
        }
      );

      await migration.removeIndex(
        "destinationGroupMemberships",
        ["destinationGuid", "remoteKey"],
        {
          unique: true,
          fields: ["destinationGuid", "remoteKey"],
        }
      );

      await migration.removeIndex("permissions", ["ownerGuid", "topic"], {
        unique: true,
        fields: ["ownerGuid", "topic"],
      });
    }
  },

  down: async function () {
    throw new Error("irreversible migration");
  },
};
