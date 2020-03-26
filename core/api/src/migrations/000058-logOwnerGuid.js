module.exports = {
  up: async function (migration, DataTypes) {
    await migration.renameColumn("logs", "profileGuid", "ownerGuid");
  },

  down: async function (migration) {
    await migration.renameColumn("runs", "ownerGuid", "profileGuid");
  },
};
