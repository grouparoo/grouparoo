import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Update Plugin Names
    await queryInterface.bulkUpdate(
      "destinations",
      { type: "braze-export-users" },
      { type: "braze-export" }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "destinations",
      { type: "braze-export" },
      { type: "braze-export-users" }
    );
  },
};
