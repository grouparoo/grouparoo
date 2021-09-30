import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Update Plugin Names
    await queryInterface.bulkUpdate(
      "sources",
      { type: "snowflake-import-table" },
      { type: "snowflake-table-import" }
    );

    await queryInterface.bulkUpdate(
      "sources",
      { type: "snowflake-import-query" },
      { type: "snowflake-query-import" }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "sources",
      { type: "snowflake-table-import" },
      { type: "snowflake-import-table" }
    );

    await queryInterface.bulkUpdate(
      "sources",
      { type: "snowflake-import-query" },
      { type: "snowflake-query-import" }
    );
  },
};
