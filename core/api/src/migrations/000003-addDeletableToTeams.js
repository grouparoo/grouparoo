module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("teams", "deletable", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      after: "administer",
    });
  },

  down: async function (migration) {
    await migration.removeColumn("teams", "deletable");
  },
};
