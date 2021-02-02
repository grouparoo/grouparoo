export default {
  up: async function (migration, DataTypes) {
    await migration.addColumn("imports", "createdProfile", {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("imports", "createdProfile");
  },
};
