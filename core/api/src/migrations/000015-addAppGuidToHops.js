module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("connections", "appGuid", {
      type: DataTypes.STRING(191),
      allowNull: false,
      after: "name",
    });
  },

  down: async function (migration, DataTypes) {
    await migration.removeColumn("connections", "appGuid");
  },
};
