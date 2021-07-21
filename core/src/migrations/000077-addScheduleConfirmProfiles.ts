export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.addColumn("schedules", "confirmProfiles", {
        type: DataTypes.BOOLEAN,
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.removeColumn("schedules", "confirmProfiles");
    });
  },
};
