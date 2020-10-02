module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("settings", "title", {
      type: DataTypes.STRING(191),
      allowNull: true,
      defaultValue: "",
    });
    await migration.changeColumn("settings", "title", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await migration.addColumn("settings", "variant", {
      type: DataTypes.STRING(191),
      allowNull: true,
      defaultValue: "",
    });
    await migration.changeColumn("settings", "variant", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("settings", "title");
    await migration.removeColumn("settings", "variant");
  },
};
