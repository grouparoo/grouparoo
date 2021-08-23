import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "apps",
      {
        type: "customerio",
      },
      {
        type: "customer.io",
      }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "apps",
      {
        type: "customer.io",
      },
      {
        type: "customerio",
      }
    );
  },
};
