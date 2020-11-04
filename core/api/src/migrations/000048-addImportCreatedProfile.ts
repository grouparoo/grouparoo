module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("imports", "createdProfile", {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    });

    await migration.changeColumn("imports", "createdProfile", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("imports", "createdProfile");
  },
};
