module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("runs", "percentComplete", {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100,
    });
    await migration.changeColumn("runs", "percentComplete", {
      type: DataTypes.INTEGER,
      allowNull: false,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("runs", "percentComplete");
  },
};
