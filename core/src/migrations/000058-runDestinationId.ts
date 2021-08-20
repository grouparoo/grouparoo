export default {
  up: async function (migration, DataTypes) {
    await migration.addColumn("runs", "destinationId", {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: null,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("runs", "destinationId");
  },
};
