module.exports = {
  up: async function (migration, DataTypes) {
    await migration.renameTable("events", "imports");
    await migration.renameTable("exportEvents", "exportImports");
    await migration.renameColumn("exportImports", "eventGuid", "importGuid");
    await migration.renameColumn("runs", "eventsCreated", "importsCreated");
  },

  down: async function (migration, DataTypes) {
    await migration.renameTable("imports", "events");
    await migration.renameColumn("exportImports", "importGuid", "eventGuid");
    await migration.renameTable("exportImports", "exportEvents");
    await migration.renameColumn("runs", "importsCreated", "eventsCreated");
  },
};
