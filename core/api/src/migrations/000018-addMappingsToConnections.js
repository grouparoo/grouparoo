module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("connections", "mapping", {
      type: DataTypes.TEXT,
      allowNull: true,
      after: "options",
    });
  },

  down: async function (migration, DataTypes) {
    await migration.removeColumn("connections", "mapping");
  },
};
