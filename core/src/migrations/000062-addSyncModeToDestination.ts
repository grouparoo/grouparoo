export default {
  up: async function (migration, DataTypes) {
    await migration.addColumn("destinations", "syncMode", {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "sync",
    });

    await migration.sequelize.query(
      `UPDATE "destinations" SET "syncMode"="sync"`
    );
  },

  down: async function (migration) {
    await migration.removeColumn("destinations", "syncMode");
  },
};
