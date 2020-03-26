module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("groupMembers", "removedAt", {
      type: DataTypes.DATE,
      allowNull: true,
    });
  },

  down: async function (migration, DataTypes) {
    await migration.removeColumn("groupMembers", "removedAt");
  },
};
