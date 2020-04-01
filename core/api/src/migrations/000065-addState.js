const tables = [
  "apps",
  "destinations",
  "profilePropertyRules",
  "schedules",
  "sources",
];

module.exports = {
  up: async function (migration, DataTypes) {
    for (const i in tables) {
      await migration.addColumn(tables[i], "state", {
        type: DataTypes.STRING(191),
        defaultValue: "ready",
        allowNull: false,
      });
    }
  },

  down: async function (migration, DataTypes) {
    for (const i in tables) {
      await migration.removeColumn(tables[i], "state");
    }
  },
};
