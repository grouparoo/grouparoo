module.exports = {
  up: async function (migration, DataTypes) {
    const TABLES = [
      "apps",
      "sources",
      "groups",
      "destinations",
      "profilePropertyRules",
      "schedules",
    ];

    for (const i in TABLES) {
      const table = TABLES[i];
      const columns = table === "profilePropertyRules" ? ["key"] : ["name"];
      await migration.removeIndex(table, columns, {
        unique: true,
        fields: columns,
      });
    }
  },

  down: async function (migration) {
    const TABLES = [
      "apps",
      "sources",
      "groups",
      "destinations",
      "profilePropertyRules",
      "schedules",
    ];

    for (const i in TABLES) {
      const table = TABLES[i];
      const columns = table === "profilePropertyRules" ? ["key"] : ["name"];
      await migration.addIndex(table, columns, {
        unique: true,
        fields: columns,
      });
    }
  },
};
