export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.createTable("profilePropertyRuleFilters", {
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

        profilePropertyRuleGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        key: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        position: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },

        match: {
          type: DataTypes.STRING(191),
          allowNull: true,
        },

        op: {
          type: DataTypes.STRING(191),
          allowNull: true,
        },

        relativeMatchNumber: {
          type: DataTypes.BIGINT,
          allowNull: true,
        },

        relativeMatchUnit: {
          type: DataTypes.STRING(191),
          allowNull: true,
        },

        relativeMatchDirection: {
          type: DataTypes.STRING(191),
          allowNull: true,
        },
      });

      await migration.addIndex(
        "profilePropertyRuleFilters",
        ["profilePropertyRuleGuid"],
        {
          fields: ["profilePropertyRuleGuid"],
        }
      );
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.dropTable("profilePropertyRuleFilters");
    });
  },
};
