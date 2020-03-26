module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("runs", "highWaterMark", {
      type: DataTypes.TEXT,
      allowNull: true,
    });
  },

  down: async function (migration, DataTypes) {
    await migration.removeColumn("runs", "highWaterMark");
  },
};
