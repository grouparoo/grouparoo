module.exports = {
  up: async function (migration, DataTypes) {
    await migration.changeColumn("profilePropertyRules", "type", {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "string",
    });
  },

  down: async function (migration, DataTypes) {
    await migration.changeColumn("profilePropertyRules", "type", {
      type: DataTypes.ENUM("float", "integer", "date", "string", "boolean"),
      allowNull: false,
      defaultValue: "string",
    });
  },
};
