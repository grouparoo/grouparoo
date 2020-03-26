module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("groupRules", "position", {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    });
  },

  down: async function (migration, DataTypes) {
    await migration.removeColumn("groupRules", "position");
  },
};
