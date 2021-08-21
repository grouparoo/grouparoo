import Sequelzie from "sequelize";

export default {
  up: async (queryInterface: Sequelzie.QueryInterface) => {
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

  down: async (queryInterface: Sequelzie.QueryInterface) => {
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
