export default {
  up: async function (migration, DataTypes) {
    await migration.addColumn("imports", "startedAt", {
      type: DataTypes.DATE,
      allowNull: true,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("imports", "startedAt");
  },
};
