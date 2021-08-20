export default {
  up: async function (migration, DataTypes) {
    await migration.addColumn("destinations", "syncMode", {
      type: DataTypes.STRING(191),
      allowNull: true,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("destinations", "syncMode");
  },
};
