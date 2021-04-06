export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.createTable("mappings", {
        guid: {
          type: DataTypes.STRING(40),
          primaryKey: true,
        },

        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },

        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },

        ownerGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        ownerType: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        profilePropertyRuleGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        remoteKey: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },
      });

      await migration.addIndex(
        "mappings",
        ["ownerGuid", "profilePropertyRuleGuid"],
        {
          unique: true,
          fields: ["ownerGuid", "profilePropertyRuleGuid"],
        }
      );

      await migration.addIndex("mappings", ["ownerGuid", "remoteKey"], {
        unique: true,
        fields: ["ownerGuid", "remoteKey"],
      });

      await migration.addIndex("mappings", ["ownerGuid"], {
        fields: ["ownerGuid"],
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.dropTable("mappings");
    });
  },
};
