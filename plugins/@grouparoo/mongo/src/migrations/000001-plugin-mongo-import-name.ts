import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Update Plugin Names
    await queryInterface.bulkUpdate(
      "sources",
      { type: "mongo-import-table" },
      { type: "mongo-table-import" }
    );

    await queryInterface.bulkUpdate(
      "sources",
      { type: "mongo-import-query" },
      { type: "mongo-query-import" }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "sources",
      { type: "mongo-table-import" },
      { type: "mongo-import-table" }
    );

    await queryInterface.bulkUpdate(
      "sources",
      { type: "mongo-query-import" },
      { type: "mongo-import-query" }
    );
  },
};
