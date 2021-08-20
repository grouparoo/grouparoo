export default {
  up: async function (migration, DataTypes) {
    await migration.addColumn("runs", "groupHighWaterMark", {
      type: DataTypes.BIGINT,
      allowNull: true,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("runs", "groupHighWaterMark");
  },
};
