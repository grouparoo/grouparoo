module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("connections", "groupGuid", {
      type: DataTypes.UUID,
      allowNull: true,
      after: "guid",
    });
  },

  down: async function (migration, DataTypes) {
    await migration.removeColumn("connections", "groupGuid");
  },
};
