module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("logs", "profileGuid", {
      type: DataTypes.TEXT,
      allowNull: true,
    });
  },

  down: async function (migration, DataTypes) {
    await migration.removeColumn("logs", "profileGuid");
  },
};
