export default {
  up: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.dropTable("exportRuns");
      await migration.dropTable("exportImports");

      await migration.removeColumn("runs", "exportsCreated");
      await migration.removeColumn("runs", "profilesExported");
    });
  },

  down: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      throw new Error("cannot recover data for this migration");
    });
  },
};
