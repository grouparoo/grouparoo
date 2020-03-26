module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("sources", "type", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await migration.addColumn("sources", "name", {
      type: DataTypes.TEXT,
      allowNull: false,
    });
  },

  down: async function (migration, DataTypes) {
    await migration.removeColumn("sources", "type");
    await migration.removeColumn("sources", "name");
  },
};
