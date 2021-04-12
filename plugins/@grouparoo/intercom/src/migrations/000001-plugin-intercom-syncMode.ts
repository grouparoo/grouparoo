const getDestinations = async (migration) => {
  const [destinationOptions] = await migration.sequelize.query(
    `SELECT "ownerId" AS "id", "key", "value", "syncMode" FROM "options" o JOIN "destinations" d ON o."ownerId"=d.id WHERE "state"='ready' AND d.type='intercom-export-contacts' AND "locked" IS NULL`
  );

  const destinations: {
    [key: string]: {
      syncMode?: string;
      creationMode: string;
      removalMode: string;
    };
  } = destinationOptions.reduce((dest, opt) => {
    if (!dest[opt.id]) {
      dest[opt.id] = {
        syncMode: opt.syncMode,
      };
    }
    dest[opt.id][opt.key] = opt.value;
    return dest;
  }, {});

  return destinations;
};

export default {
  up: async function (migration) {
    await migration.sequelize.transaction(async () => {
      // Get current options for intercom destinations
      const intercomDestinations = await getDestinations(migration);

      // determine and update correct sync mode based on options
      for (const destId in intercomDestinations) {
        const dest = intercomDestinations[destId];
        let syncMode: string;

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
            replacements: [destinationIds],
          }
        );
      }
    });
  },

  down: async function (migration) {
    // Get sync modes
    const destinations = await getDestinations(migration);

    const noCreateIds = [];
    const noDeleteIds = [];
    for (const destId in destinations) {
      const { syncMode } = destinations[destId];
      if (!syncMode) continue;

      if (["enrich", "additive"].includes(syncMode)) {
        noDeleteIds.push(destId);
      }

      if (syncMode === "enrich") {
        noCreateIds.push(destId);
      }
    }

    // Set removalMode="Skip" for destinations that don't delete
    await migration.bulkUpdate(
      "options",
      {
        value: "Skip",
      },
      {
        ownerId: noDeleteIds,
        key: "removalMode",
      }
    );

    // Set creationMode="Enrich" for destinations that don't create
    await migration.bulkUpdate(
      "options",
      { value: "Enrich" },
      {
        ownerId: noCreateIds,
        key: "creationMode",
      }
    );

    // Remove syncMode value
    await migration.bulkUpdate(
      "destinations",
      {
        syncMode: null,
      },
      { id: Object.keys(destinations) }
    );
  },
};
