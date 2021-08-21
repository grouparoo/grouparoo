import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
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
      await queryInterface.removeIndex(table, columns, {
        unique: true,
        fields: columns,
      });
    }
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
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
      await queryInterface.addIndex(table, columns, {
        unique: true,
        fields: columns,
      });
    }
  },
};
