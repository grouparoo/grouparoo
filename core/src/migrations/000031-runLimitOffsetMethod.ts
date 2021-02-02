export default {
  up: async function (migration, DataTypes) {
    await migration.addColumn("runs", "limit", {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    });

    await migration.addColumn("runs", "offset", {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    });

    await migration.addColumn("runs", "method", {
      type: DataTypes.TEXT,
      allowNull: true,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("runs", "limit");
    await migration.removeColumn("runs", "offset");
    await migration.removeColumn("runs", "method");
  },
};
