module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "groupRules",
      {
        guid: {
          type: DataTypes.STRING(40),
          primaryKey: true,
        },

        groupGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        profilePropertyRuleGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        match: {
          type: DataTypes.TEXT,
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

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        charset: "utf8mb4",
      }
    );

    await migration.removeColumn("groups", "rules");
  },

  down: async function (migration) {
    await migration.dropTable("groupRules");

    await migration.addColumn("groups", "rules", {
      type: DataTypes.TEXT,
      allowNull: true,
    });
  },
};
