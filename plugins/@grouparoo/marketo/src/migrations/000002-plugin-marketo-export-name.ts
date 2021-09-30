import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Update Plugin Names
    await queryInterface.bulkUpdate(
      "destinations",
      { type: "marketo-export-leads" },
      { type: "marketo-export" }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "destinations",
      { type: "marketo-export" },
      { type: "marketo-export-leads" }
    );
  },
};
