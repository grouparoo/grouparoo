import Sequelize from "sequelize";

const getDestinations = async (queryInterface: Sequelize.QueryInterface) => {
  const [destinationOptions]: [Record<string, any>[], any] =
    await queryInterface.sequelize.query(
      `SELECT "ownerId" AS "id", "key", "value", "syncMode" FROM "options" o JOIN "destinations" d ON o."ownerId"=d.id WHERE "state"='ready' AND d.type='intercom-export-contacts' AND "locked" IS NULL`
    );

  const destinations: {
    [key: string]: {
      syncMode?: string;
      creationMode: string;
      removalMode: string;
    };
  } = destinationOptions.reduce((dest, opt) => {
    if (!dest[opt["id"]]) {
      dest[opt["id"]] = {
        syncMode: opt["syncMode"],
      };
    }
    dest[opt["id"]][opt["key"]] = opt["value"];
    return dest;
  }, {});

  return destinations;
};

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Get current options for intercom destinations
    const intercomDestinations = await getDestinations(queryInterface);

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

      await queryInterface.sequelize.query(
        `UPDATE "destinations" SET "syncMode"=? WHERE "id"=?`,
        {
          replacements: [syncMode, destId],
        }
      );
    }

    // clear option values that are no longer supported
    const destinationIds = Object.keys(intercomDestinations);
    if (destinationIds.length > 0) {
      await queryInterface.sequelize.query(
        `UPDATE "options" SET "value"='' WHERE ("value"='Skip' OR "value"='Enrich') AND "ownerId" IN(?) AND "key" IN ('creationMode', 'removalMode')`,
        {
          replacements: [destinationIds],
        }
      );
    }
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    // Get sync modes
    const destinations = await getDestinations(queryInterface);

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
    await queryInterface.bulkUpdate(
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
    await queryInterface.bulkUpdate(
      "options",
      { value: "Enrich" },
      {
        ownerId: noCreateIds,
        key: "creationMode",
      }
    );

    // Remove syncMode value
    await queryInterface.bulkUpdate(
      "destinations",
      {
        syncMode: null,
      },
      { id: Object.keys(destinations) }
    );
  },
};
