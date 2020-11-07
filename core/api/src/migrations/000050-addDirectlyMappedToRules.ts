module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("profilePropertyRules", "directlyMapped", {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    });
    await migration.changeColumn("profilePropertyRules", "directlyMapped", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("profilePropertyRules", "directlyMapped");
  },
};
