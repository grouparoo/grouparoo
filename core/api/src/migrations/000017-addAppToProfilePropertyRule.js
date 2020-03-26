module.exports = {
  up: async function (migration, DataTypes) {
    await migration.removeColumn("profilePropertyRules", "source");

    await migration.addColumn("profilePropertyRules", "app", {
      type: DataTypes.STRING(191),
      defaultValue: "manual",
      allowNull: false,
      after: "unique",
    });
  },

  down: async function (migration, DataTypes) {
    await migration.removeColumn("profilePropertyRules", "app");

    await migration.addColumn("profilePropertyRules", "source", {
      type: DataTypes.STRING(191),
      allowNull: false,
      after: "unique",
    });
  },
};
