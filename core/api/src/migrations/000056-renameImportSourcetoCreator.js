module.exports = {
  up: async function (migration, DataTypes) {
    await migration.renameColumn("imports", "sourceType", "creatorType");
    await migration.renameColumn("imports", "sourceGuid", "creatorGuid");
  },

  down: async function (migration, DataTypes) {
    await migration.renameColumn("imports", "creatorType", "sourceType");
    await migration.renameColumn("imports", "creatorGuid", "sourceGuid");
  },
};
