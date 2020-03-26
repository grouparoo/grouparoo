module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("profilePropertyRules", "passive", {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    });
    await migration.removeColumn("profilePropertyRules", "queryData");
  },

  down: async function (migration, DataTypes) {
    await migration.removeColumn("profilePropertyRules", "passive");
    await migration.addColumn("profilePropertyRules", "queryData", {
      type: DataTypes.TEXT,
      allowNull: false,
    });
  },
};
