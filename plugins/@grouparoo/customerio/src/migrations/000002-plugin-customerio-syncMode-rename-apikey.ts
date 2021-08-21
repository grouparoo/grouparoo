import Sequelzie from "sequelize";

export default {
  up: async (queryInterface: Sequelzie.QueryInterface) => {
    // Set all existing instances to "sync" to maintain same behavior
    await queryInterface.bulkUpdate(
      "destinations",
      {
        syncMode: "sync",
      },
      {
        state: "ready",
        type: "customerio-export",
        locked: null,
      }
    );

    // Get customer.io app options to change.
    const [options] = await queryInterface.sequelize.query(
      `SELECT "ownerId" FROM "options" o JOIN "apps" a ON o."ownerId"=a."id" WHERE a.type='customerio'`
    );

    // set options key column.
    for (const option of options) {
      await queryInterface.sequelize.query(
        `UPDATE "options" SET "key"='trackingApiKey' WHERE "ownerType"='app' AND "key"='apiKey' AND "ownerId"=?`,
        {
          replacements: [option["ownerId"]],
        }
      );
    }
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "destinations",
      {
        syncMode: null,
      },
      {
        type: "customerio-export",
        locked: null,
      }
    );

    // Get customer.io app options to change.
    const [apps] = await queryInterface.sequelize.query(
      `SELECT "ownerId" FROM "options" o JOIN "apps" a ON o."ownerId"=a."id" WHERE a.type='customerio'`
    );

    // set options key column.
    for (const app of apps) {
      await queryInterface.sequelize.query(
        `UPDATE "options" SET "key"='apiKey' WHERE "ownerType"='app' AND "key"='trackingApiKey' AND "ownerId"=?`,
        {
          replacements: [app["ownerId"]],
        }
      );
    }
  },
};
