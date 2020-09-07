module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("imports", "force", {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    });

    await migration.changeColumn("imports", "force", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    });

    await migration.addColumn("exports", "force", {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    });

    await migration.changeColumn("exports", "force", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("imports", "force");
    await migration.removeColumn("exports", "force");
  },
};
