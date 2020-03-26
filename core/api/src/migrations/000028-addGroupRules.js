module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("groups", "rules", {
      type: DataTypes.TEXT,
      allowNull: true,
    });

    await migration.addColumn("groups", "matchType", {
      type: DataTypes.DataTypes.STRING(191),
      allowNull: false,
    });
  },

  down: async function (migration, DataTypes) {
    await migration.removeColumn("groups", "rules");
    await migration.removeColumn("groups", "matchType");
  },
};
