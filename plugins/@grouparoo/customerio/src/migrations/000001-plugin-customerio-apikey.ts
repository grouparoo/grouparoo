export default {
  up: async function (migration) {
    await migration.sequelize.transaction(async () => {
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
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
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
    });
  },
};
