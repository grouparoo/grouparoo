export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.addColumn("settings", "title", {
        type: DataTypes.STRING(191),
        allowNull: false,
        defaultValue: "",
      });

      await migration.addColumn("settings", "variant", {
        type: DataTypes.STRING(191),
        allowNull: false,
        defaultValue: "",
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.removeColumn("settings", "title");
      await migration.removeColumn("settings", "variant");
    });
  },
};
