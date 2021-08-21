import Sequelzie from "sequelize";

export default {
  up: async (queryInterface: Sequelzie.QueryInterface) => {
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

  down: async (queryInterface: Sequelzie.QueryInterface) => {
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
