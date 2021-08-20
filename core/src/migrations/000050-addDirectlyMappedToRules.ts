export default {
  up: async function (migration, DataTypes) {
    await migration.addColumn("profilePropertyRules", "directlyMapped", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("profilePropertyRules", "directlyMapped");
  },
};
