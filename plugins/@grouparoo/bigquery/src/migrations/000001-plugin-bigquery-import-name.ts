import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Update Plugin Names
    await queryInterface.bulkUpdate(
      "sources",
      { type: "bigquery-import-table" },
      { type: "bigquery-table-import" }
    );

    await queryInterface.bulkUpdate(
      "sources",
      { type: "bigquery-import-query" },
      { type: "bigquery-query-import" }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "sources",
      { type: "bigquery-table-import" },
      { type: "bigquery-import-table" }
    );

    await queryInterface.bulkUpdate(
      "sources",
      { type: "bigquery-import-query" },
      { type: "bigquery-query-import" }
    );
  },
};
