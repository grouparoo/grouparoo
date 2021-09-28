import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Update Plugin Names
    await queryInterface.bulkUpdate(
      "destinations",
      { type: "facebook-export-audiences-lookalike" },
      { type: "facebook-audiences-lookalike" }
    );
    await queryInterface.bulkUpdate(
      "destinations",
      { type: "facebook-export-audiences-custom" },
      { type: "facebook-audiences-custom" }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "destinations",
      { type: "facebook-audiences-lookalike" },
      { type: "facebook-export-audiences-lookalike" }
    );
    await queryInterface.bulkUpdate(
      "destinations",
      { type: "facebook-audiences-custom" },
      { type: "facebook-export-audiences-custom" }
    );
  },
};
