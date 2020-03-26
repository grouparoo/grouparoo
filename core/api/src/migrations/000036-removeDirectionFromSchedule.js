module.exports = {
  up: async function (migration, DataTypes) {
    await migration.removeColumn("schedules", "direction");
  },

  down: async function (migration, DataTypes) {
    await migration.addColumn(
      "schedules",
      "direction",
      DataTypes.ENUM("import", "export")
    );
  },
};
