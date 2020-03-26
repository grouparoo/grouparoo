module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("events", "rawData", {
      type: DataTypes.TEXT,
    });
  },

  down: async function (migration, DataTypes) {
    await migration.removeColumn("events", "rawData");
  },
};
