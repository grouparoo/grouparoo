import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Update Plugin Names
    await queryInterface.bulkUpdate(
      "sources",
      { type: "redshift-import-table" },
      { type: "redshift-table-import" }
    );

    await queryInterface.bulkUpdate(
      "sources",
      { type: "redshift-import-query" },
      { type: "redshift-query-import" }
    );

    await queryInterface.bulkUpdate(
      "destinations",
      { type: "redshift-export-records" },
      { type: "redshift-export" }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "sources",
      { type: "redshift-table-import" },
      { type: "redshift-import-table" }
    );

    await queryInterface.bulkUpdate(
      "sources",
      { type: "redshift-query-import" },
      { type: "redshift-import-query" }
    );

    await queryInterface.bulkUpdate(
      "destinations",
      { type: "redshift-export" },
      { type: "redshift-export-records" }
    );
  },
};
