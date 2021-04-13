export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.addColumn("runs", "destinationId", {
        type: DataTypes.STRING(40),
        allowNull: true,
        defaultValue: null,
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.removeColumn("runs", "destinationId");
    });
  },
};
