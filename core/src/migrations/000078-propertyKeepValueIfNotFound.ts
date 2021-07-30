export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.addColumn("properties", "keepValueIfNotFound", {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.removeColumn("properties", "keepValueIfNotFound");
    });
  },
};
