export default {
  up: async function (migration) {
    // Set all existing instances to "sync" to maintain same behavior
    await migration.bulkUpdate(
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
    const [options] = await migration.sequelize.query(
      `SELECT "ownerId" FROM "options" o JOIN "apps" a ON o."ownerId"=a."id" WHERE a.type='customerio'`
    );

    // set options key column.
    for (const option of options) {
      await migration.sequelize.query(
        `UPDATE "options" SET "key"='trackingApiKey' WHERE "ownerType"='app' AND "key"='apiKey' AND "ownerId"=?`,
        {
          replacements: [option.ownerId],
        }
      );
    }
  },

  down: async function (migration) {
    await migration.bulkUpdate(
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
    const [apps] = await migration.sequelize.query(
      `SELECT "ownerId" FROM "options" o JOIN "apps" a ON o."ownerId"=a."id" WHERE a.type='customerio'`
    );

    // set options key column.
    for (const app of apps) {
      await migration.sequelize.query(
        `UPDATE "options" SET "key"='apiKey' WHERE "ownerType"='app' AND "key"='trackingApiKey' AND "ownerId"=?`,
        {
          replacements: [app.ownerId],
        }
      );
    }
  },
};
