module.exports = {
  up: async function (migration, DataTypes) {
    await migration.dropTable("groupCounts");
  },

  down: async function (migration) {
    throw new Error("not a reversible migration");
  },
};
