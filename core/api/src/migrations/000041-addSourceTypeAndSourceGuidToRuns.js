module.exports = {
  up: async function (migration, DataTypes) {
    await migration.renameColumn("runs", "scheduleGuid", "creatorGuid");

    await migration.addColumn("runs", "creatorType", {
      type: DataTypes.STRING(191),
      defaultValue: "schedule",
      allowNull: true,
    });

    await migration.sequelize.query(
      "UPDATE runs set \"creatorType\" = 'schedule'"
    );

    await migration.changeColumn("runs", "creatorType", {
      type: DataTypes.STRING(191),
      defaultValue: null,
      allowNull: false,
    });
  },

  down: async function (migration, DataTypes) {
    await migration.renameColumn("runs", "creatorGuid", "scheduleGuid");
    await migration.removeColumn("runs", "creatorType");
  },
};
