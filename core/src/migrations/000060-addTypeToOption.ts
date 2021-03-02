export default {
  up: async function (migration, DataTypes) {
    await migration.addColumn("options", "type", {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "string",
    });

    await migration.changeColumn("options", "type", {
      type: DataTypes.STRING,
      allowNull: false,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("options", "type");
  },
};
