export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.addColumn("exports", "force", {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.removeColumn("exports", "force");
    });
  },
};
