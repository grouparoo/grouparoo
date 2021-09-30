import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Update Plugin Names
    await queryInterface.bulkUpdate(
      "destinations",
      { type: "sendgrid-export-marketing-contacts" },
      { type: "sendgrid-export-marketing" }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "destinations",
      { type: "sendgrid-export-marketing" },
      { type: "sendgrid-export-marketing-contacts" }
    );
  },
};
