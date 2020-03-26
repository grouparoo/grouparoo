module.exports = {
  up: async function (migration, DataTypes) {
    await migration.removeIndex("sources", ["appGuid"], {
      fields: "appGuid",
    });
  },

  down: async function (migration, DataTypes) {
    await migration.addIndex("sources", ["appGuid"], {
      unique: true,
      fields: "appGuid",
    });
  },
};
