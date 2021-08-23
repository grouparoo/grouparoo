export default {
  up: async function (migration, DataTypes) {
    await migration.addColumn("runs", "percentComplete", {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("runs", "percentComplete");
  },
};
