export default {
  up: async function (migration) {
    await migration.sequelize.transaction(async () => {
      // Get current options for intercom destinations
      const [intercomOptions] = await migration.sequelize.query(
        `SELECT "ownerId" AS "id", "key", "value" FROM "options" o JOIN "destinations" d ON o."ownerId"=d.id WHERE "state"='ready' AND d.type='intercom-export-contacts' AND "locked" IS NULL`
      );

      const intercomDestinations = intercomOptions.reduce((dest, opt) => {
        if (!dest[opt.id]) {
          dest[opt.id] = {};
        }
        dest[opt.id][opt.key] = opt.value;
        return dest;
      }, {});

      // determine and update correct sync mode based on options
      for (const destId in intercomDestinations) {
        const dest = intercomDestinations[destId];
        let syncMode;

        if (dest.creationMode === "Enrich") {
          // Don't create people
          syncMode = "enrich";
        } else if (dest.removalMode === "Skip") {
          // You can create, but not delete
          syncMode = "additive";
        } else {
          // You can do everything
          syncMode = "sync";
        }

        await migration.sequelize.query(
          `UPDATE "destinations" SET "syncMode"=? WHERE "id"=?`,
          {
            replacements: [syncMode, destId],
          }
        );
      }

      // clear option values that are no longer supported
      const destinationIds = Object.keys(intercomDestinations);
      if (destinationIds.length > 0) {
        await migration.sequelize.query(
          `UPDATE "options" SET "value"='' WHERE ("value"='Skip' OR "value"='Enrich') AND "ownerId" IN(?) AND "key" IN ('creationMode', 'removalMode')`,
          {
            replacements: destinationIds,
          }
        );
      }
    });
  },

  down: async function (migration) {
    throw new Error("cannot recover data for this migration");
  },
};
