module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("exports", "hasChanges", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    });
    await migration.changeColumn("exports", "hasChanges", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    });

    await migration.addColumn("runs", "force", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
    await migration.changeColumn("runs", "force", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("exports", "hasChanges");
    await migration.removeColumn("runs", "force");
  },
};
