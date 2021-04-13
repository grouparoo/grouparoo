export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.addColumn("imports", "createdProfile", {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.removeColumn("imports", "createdProfile");
    });
  },
};
