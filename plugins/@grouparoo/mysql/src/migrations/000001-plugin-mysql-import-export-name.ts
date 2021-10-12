import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Update Plugin Names
    await queryInterface.bulkUpdate(
      "sources",
      { type: "mysql-import-table" },
      { type: "mysql-table-import" }
    );

    await queryInterface.bulkUpdate(
      "sources",
      { type: "mysql-import-query" },
      { type: "mysql-query-import" }
    );

    await queryInterface.bulkUpdate(
      "destinations",
      { type: "mysql-export-records" },
      { type: "mysql-export" }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "sources",
      { type: "mysql-table-import" },
      { type: "mysql-import-table" }
    );

    await queryInterface.bulkUpdate(
      "sources",
      { type: "mysql-query-import" },
      { type: "mysql-import-query" }
    );

    await queryInterface.bulkUpdate(
      "destinations",
      { type: "mysql-export" },
      { type: "mysql-export-records" }
    );
  },
};
