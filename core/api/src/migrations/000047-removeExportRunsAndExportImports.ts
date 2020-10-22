module.exports = {
  up: async function (migration) {
    await migration.dropTable("exportRuns");
    await migration.dropTable("exportImports");

    await migration.removeColumn("runs", "exportsCreated");
    await migration.removeColumn("runs", "profilesExported");

    await migration.removeColumn("imports", "exportedAt");
  },

  down: async function (migration, DataTypes) {
    throw new Error("cannot recover data for this migration");
  },
};
