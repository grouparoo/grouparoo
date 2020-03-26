module.exports = {
  up: async function (migration, DataTypes) {
    await migration.removeColumn("runs", "profilesCount");

    await migration.addColumn("runs", "profilesReadCount", {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      after: "state",
    });

    await migration.addColumn("runs", "profilesCreatedCount", {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      after: "profilesReadCount",
    });

    await migration.addColumn("runs", "profilesUpdatedCount", {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      after: "profilesCreatedCount",
    });
  },

  down: async function (migration, DataTypes) {
    await migration.removeColumn("runs", "profilesReadCount");
    await migration.removeColumn("runs", "profilesCreatedCount");
    await migration.removeColumn("runs", "profilesUpdatedCount");

    await migration.addColumn("runs", "profilesCount", {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      after: "state",
    });
  },
};
