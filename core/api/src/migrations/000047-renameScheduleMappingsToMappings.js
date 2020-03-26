module.exports = {
  up: async function (migration, DataTypes) {
    await migration.renameTable("scheduleMappings", "mappings");
    await migration.renameColumn("mappings", "scheduleGuid", "ownerGuid");
    await migration.addColumn("mappings", "ownerType", {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "schedule",
    });
  },

  down: async function (migration) {
    await migration.renameTable("mappings", "scheduleMappings");
    await migration.renameColumn(
      "scheduleMappings",
      "ownerGuid",
      "scheduleGuid"
    );
    await migration.removeColumn("scheduleMappings", "ownerType");
  },
};
