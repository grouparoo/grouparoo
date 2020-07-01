module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("exports", "runGuids", {
      type: DataTypes.TEXT,
      allowNull: true,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("exports", "runGuids");
  },
};
