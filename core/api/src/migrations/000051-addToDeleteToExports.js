module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("exports", "toDelete", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
  },

  down: async function (migration, DataTypes) {
    await migration.removeColumn("exports", "toDelete");
  },
};
