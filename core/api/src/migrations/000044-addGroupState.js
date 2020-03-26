module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("groups", "state", {
      type: DataTypes.ENUM("ready", "initializing", "updating", "deleted"),
      allowNull: false,
      defaultValue: "ready",
    });
  },

  down: async function (migration, DataTypes) {
    await migration.removeColumn("groups", "state");
  },
};
