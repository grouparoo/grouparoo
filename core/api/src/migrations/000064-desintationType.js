module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("destinations", "type", {
      type: DataTypes.STRING(191),
      allowNull: true,
    });
  },

  down: async function (migration, DataTypes) {
    await migration.removeColumn("destinations", "type");
  },
};
