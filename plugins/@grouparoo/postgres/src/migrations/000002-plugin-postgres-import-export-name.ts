import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Update Plugin Names
    await queryInterface.bulkUpdate(
      "sources",
      { type: "postgres-import-table" },
      { type: "postgres-table-import" }
    );

    await queryInterface.bulkUpdate(
      "sources",
      { type: "postgres-import-query" },
      { type: "postgres-query-import" }
    );

    await queryInterface.bulkUpdate(
      "destinations",
      { type: "postgres-export-records" },
      { type: "postgres-export" }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "sources",
      { type: "postgres-table-import" },
      { type: "postgres-import-table" }
    );

    await queryInterface.bulkUpdate(
      "sources",
      { type: "postgres-query-import" },
      { type: "postgres-import-query" }
    );

    await queryInterface.bulkUpdate(
      "destinations",
      { type: "postgres-export" },
      { type: "postgres-export-records" }
    );
  },
};
