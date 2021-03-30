export default {
  up: async function (migration, DataTypes) {
    await migration.addColumn("destinations", "syncMode", {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "Sync",
    });

    await migration.sequelize.query(
      `UPDATE "destinations" SET "syncMode"='Sync'`
    );
  },

  down: async function (migration) {
    await migration.removeColumn("destinations", "syncMode");
  },
};
