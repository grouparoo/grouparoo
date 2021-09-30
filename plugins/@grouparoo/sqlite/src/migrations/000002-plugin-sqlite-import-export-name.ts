import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Update Plugin Names

    await queryInterface.bulkUpdate(
      "sources",
      { type: "sqlite-import-table" },
      { type: "sqlite-table-import" }
    );

    await queryInterface.bulkUpdate(
      "sources",
      { type: "sqlite-import-query" },
      { type: "sqlite-query-import" }
    );

    await queryInterface.bulkUpdate(
      "destinations",
      { type: "sqlite-export-records" },
      { type: "sqlite-export" }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "sources",
      { type: "sqlite-table-import" },
      { type: "sqlite-import-table" }
    );

    await queryInterface.bulkUpdate(
      "sources",
      { type: "sqlite-query-import" },
      { type: "sqlite-import-query" }
    );

    await queryInterface.bulkUpdate(
      "destinations",
      { type: "sqlite-export" },
      { type: "sqlite-export-records" }
    );
  },
};
