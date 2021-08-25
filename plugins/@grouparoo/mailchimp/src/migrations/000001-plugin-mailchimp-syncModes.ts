import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Set all existing instances to "sync" to maintain same behavior
    await queryInterface.sequelize.query(
      `UPDATE "destinations" SET "syncMode"='sync' WHERE "state"='ready' AND "type"='mailchimp-export' AND "locked" IS NULL`
    );
    await queryInterface.sequelize.query(
      `UPDATE "destinations" SET "syncMode"='enrich' WHERE "state"='ready' AND "type"='mailchimp-export-id' AND "locked" IS NULL`
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "destinations",
      {
        syncMode: null,
      },
      {
        type: ["mailchimp-export-id", "mailchimp-export"],
        locked: null,
      }
    );
  },
};
