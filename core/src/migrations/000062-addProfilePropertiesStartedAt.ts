export default {
  up: async function (migration, DataTypes) {
    await migration.addColumn("profileProperties", "startedAt", {
      type: DataTypes.DATE,
      allowNull: true,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("profileProperties", "startedAt");
  },
};
