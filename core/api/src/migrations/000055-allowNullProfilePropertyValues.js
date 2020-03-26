module.exports = {
  up: async function (migration, DataTypes) {
    await migration.changeColumn("profileProperties", "rawValue", {
      type: DataTypes.TEXT,
      defaultValue: null,
      allowNull: true,
    });
  },

  down: async function (migration, DataTypes) {
    await migration.changeColumn("profileProperties", "rawValue", {
      type: DataTypes.TEXT,
      allowNull: false,
    });
  },
};
