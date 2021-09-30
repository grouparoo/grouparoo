import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Update Plugin Names
    await queryInterface.bulkUpdate(
      "destinations",
      { type: "pipedrive-export-persons" },
      { type: "pipedrive-export" }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "destinations",
      { type: "pipedrive-export" },
      { type: "pipedrive-export-persons" }
    );
  },
};
