module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addIndex("profiles", ["createdAt"], {
      unique: false,
      fields: "createdAt",
    });
  },

  down: async function (migration) {
    await migration.removeIndex("profiles", ["createdAt"], {
      fields: "createdAt",
    });
  },
};
