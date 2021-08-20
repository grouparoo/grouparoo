export default {
  up: async function (migration, DataTypes) {
    await migration.addColumn("runs", "exportsCreated", {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    });

    await migration.addColumn("exports", "runGuids", {
      type: DataTypes.TEXT,
      allowNull: true,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("runs", "exportsCreated");
    await migration.removeColumn("exports", "runGuids");
  },
};
