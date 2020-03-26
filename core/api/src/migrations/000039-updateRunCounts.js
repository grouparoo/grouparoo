module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("runs", "eventsCreated", {
      type: DataTypes.BIGINT,
      defaultValue: 0,
      allowNull: false,
    });

    await migration.addColumn("runs", "profilesCreated", {
      type: DataTypes.BIGINT,
      defaultValue: 0,
      allowNull: false,
    });

    await migration.addColumn("runs", "profilesImported", {
      type: DataTypes.BIGINT,
      defaultValue: 0,
      allowNull: false,
    });

    await migration.addColumn("runs", "profilesExported", {
      type: DataTypes.BIGINT,
      defaultValue: 0,
      allowNull: false,
    });

    await migration.addColumn("runs", "completedAt", {
      type: DataTypes.DATE,
      allowNull: true,
    });

    await migration.removeColumn("runs", "profilesReadCount");
    await migration.removeColumn("runs", "profilesCreatedCount");
    await migration.removeColumn("runs", "profilesUpdatedCount");
  },

  down: async function (migration, DataTypes) {
    await migration.addColumn("runs", "profilesReadCount", {
      type: DataTypes.BIGINT,
      defaultValue: 0,
      allowNull: false,
    });

    await migration.addColumn("runs", "profilesCreatedCount", {
      type: DataTypes.BIGINT,
      defaultValue: 0,
      allowNull: false,
    });

    await migration.addColumn("runs", "profilesUpdatedCount", {
      type: DataTypes.BIGINT,
      defaultValue: 0,
      allowNull: false,
    });

    await migration.removeColumn("runs", "eventsCreated");
    await migration.removeColumn("runs", "profilesCreated");
    await migration.removeColumn("runs", "profilesImported");
    await migration.removeColumn("runs", "profilesExported");
    await migration.removeColumn("runs", "completedAt");
  },
};
