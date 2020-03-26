module.exports = {
  up: async function (migration, DataTypes) {
    await migration.removeColumn("profilePropertyRules", "app");

    await migration.addColumn("profilePropertyRules", "appGuid", {
      type: DataTypes.STRING(40),
      allowNull: true,
      after: "guid",
    });

    await migration.addColumn("profilePropertyRules", "query", {
      type: DataTypes.TEXT,
      allowNull: true,
      after: "type",
    });
  },

  down: async function (migration, DataTypes) {
    await migration.addColumn("profilePropertyRules", "app", {
      type: DataTypes.STRING(191),
      allowNull: false,
      after: "guid",
    });

    await migration.removeColumn("profilePropertyRules", "appGuid");
    await migration.removeColumn("profilePropertyRules", "query");
  },
};
