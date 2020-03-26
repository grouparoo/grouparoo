module.exports = {
  up: async function (migration) {
    await migration.renameTable("hops", "connections");
  },

  down: async function (migration) {
    await migration.renameTable("connections", "hops");
  },
};
