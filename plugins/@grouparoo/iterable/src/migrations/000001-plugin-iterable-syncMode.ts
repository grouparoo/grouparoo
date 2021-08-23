import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Set all existing instances to "sync" to maintain same behavior
    await queryInterface.bulkUpdate(
      "destinations",
      {
        syncMode: "sync",
      },
      {
        state: "ready",
        type: "iterable-export",
        locked: null,
      }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "destinations",
      {
        syncMode: null,
      },
      {
        type: "iterable-export",
        locked: null,
      }
    );
  },
};
