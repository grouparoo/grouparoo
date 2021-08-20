export default {
  up: async function (migration, DataTypes) {
    await migration.addColumn("schedules", "confirmProfiles", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await migration.changeColumn("schedules", "confirmProfiles", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("schedules", "confirmProfiles");
  },
};
