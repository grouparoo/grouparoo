module.exports = {
  up: async function (migration, DataTypes) {
    await migration.renameTable("connections", "schedules");
    await migration.removeColumn("schedules", "groupGuid");
    await migration.removeColumn("schedules", "type");

    await migration.renameColumn("runs", "connectionGuid", "scheduleGuid");
  },

  down: async function (migration, DataTypes) {
    await migration.renameTable("schedules", "connections");

    await migration.addColumn("connections", "groupGuid", {
      type: DataTypes.STRING(40),
      allowNull: false,
    });

    await migration.addColumn("connections", "type", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await migration.renameColumn("runs", "scheduleGuid", "connectionGuid");
  },
};
