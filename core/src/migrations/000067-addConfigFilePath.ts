const tables = [
  "apps",
  "sources",
  "schedules",
  "properties",
  "groups",
  "destinations",
];

export default {
  up: async function (migration, DataTypes) {
    for (let table of tables) {
      await migration.sequelize.transaction(async () => {
        await migration.addColumn(table, "configFilePath", {
          type: DataTypes.STRING,
          allowNull: true,
        });
      });
    }
  },

  down: async function (migration) {
    for (let table of tables) {
      await migration.sequelize.transaction(async () => {
        await migration.removeColumn(table, "configFilePath");
      });
    }
  },
};
