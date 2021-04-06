export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.addColumn("profilePropertyRules", "directlyMapped", {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.removeColumn("profilePropertyRules", "directlyMapped");
    });
  },
};
