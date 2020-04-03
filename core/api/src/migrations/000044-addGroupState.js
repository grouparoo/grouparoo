module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("groups", "state", {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "ready",
    });
  },

  down: async function (migration, DataTypes) {
    await migration.removeColumn("groups", "state");
  },
};
