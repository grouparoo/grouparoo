export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.createTable("profileProperties", {
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

        profileGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        rawValue: {
          type: DataTypes.TEXT,
          allowNull: true,
        },

        profilePropertyRuleGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },
      });

      await migration.addIndex(
        "profileProperties",
        ["profileGuid", "profilePropertyRuleGuid"],
        {
          unique: true,
          fields: ["profileGuid", "profilePropertyRuleGuid"],
        }
      );

      await migration.addIndex("profileProperties", ["profileGuid"], {
        fields: ["profileGuid"],
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.dropTable("profileProperties");
    });
  },
};
