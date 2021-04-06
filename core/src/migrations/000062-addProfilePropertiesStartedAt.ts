export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.addColumn("profileProperties", "startedAt", {
        type: DataTypes.DATE,
        allowNull: true,
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.removeColumn("profileProperties", "startedAt");
    });
  },
};
