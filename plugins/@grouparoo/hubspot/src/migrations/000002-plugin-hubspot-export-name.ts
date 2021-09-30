import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Update Plugin Names
    await queryInterface.bulkUpdate(
      "destinations",
      { type: "hubspot-export-contacts" },
      { type: "hubspot-export" }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "destinations",
      { type: "hubspot-export" },
      { type: "hubspot-export-contacts" }
    );
  },
};
