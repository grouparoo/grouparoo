import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Update Plugin Names
    await queryInterface.bulkUpdate(
      "sources",
      { type: "csv-import-table" },
      { type: "csv-import" }
    );
    await queryInterface.bulkUpdate(
      "sources",
      { type: "csv-import-table" },
      { type: "csv-remote-import" }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "sources",
      { type: "csv-import" },
      { type: "csv-import-table" }
    );
  },
};
