module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("profilePropertyRules", "identifying", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
    await migration.changeColumn("profilePropertyRules", "identifying", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("profilePropertyRules", "identifying");
  },
};
