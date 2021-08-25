import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Set all existing instances to "enrich" to maintain same behavior
    await queryInterface.bulkUpdate(
      "destinations",
      {
        syncMode: "enrich",
      },
      {
        state: "ready",
        type: "onesignal-export",
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
        type: "onesignal-export",
        locked: null,
      }
    );
  },
};
