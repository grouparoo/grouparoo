import crypto from "crypto";

export default {
  up: async function (migration) {
    // Get current sync modes for facebook destinations
    const [destinations] = await migration.sequelize.query(
      `SELECT "ownerId" AS "id", "value" AS "mode" FROM "options" o JOIN "destinations" d ON o."ownerId"=d.id WHERE "key"='syncMode' AND d.type='facebook-audiences-custom' AND "locked" IS NULL`
    );

    // set sync mode on destination
    for (const dest of destinations) {
      let syncMode: string;
      switch (dest.mode) {
        case "Additive":
          syncMode = "additive";
          break;
        case "Sync":
        default:
          // if option was not set, defaulted to "sync"
          syncMode = "sync";
          break;
      }

      await migration.sequelize.query(
        `UPDATE "destinations" SET "syncMode"=? WHERE "id"=?`,
        {
          replacements: [syncMode, dest.id],
        }
      );
    }

    // remove syncMode option
    const destinationIds = destinations.map((d) => d.id);
    if (destinationIds.length > 0) {
      await migration.sequelize.query(
        `DELETE FROM "options" WHERE "key"='syncMode' AND "ownerId" IN(?)`,
        {
          replacements: [destinationIds],
        }
      );
    }
  },

  down: async function (migration) {
    // Get sync modes
    const [destinations] = await migration.sequelize.query(
      `SELECT "id", "syncMode" FROM "destinations" WHERE "type"='facebook-audiences-custom' AND "syncMode" IS NOT NULL AND "locked" IS NULL`
    );

    // Add corresponding "syncMode" option for each destination
    const newOptions = [];
    for (const dest of destinations) {
      let syncMode: string;
      switch (dest.syncMode) {
        case "sync":
          syncMode = "Sync";
          break;
        case "additive":
          syncMode = "Additive";
          break;
        default:
          continue;
      }

      newOptions.push({
        id: `opt_${crypto.randomBytes(16).toString("hex")}`,
        createdAt: new Date(),
        updatedAt: new Date(),
        ownerId: dest.id,
        ownerType: "destination",
        key: "syncMode",
        value: syncMode,
        type: "string",
      });
    }

    await migration.bulkInsert("options", newOptions);

    // Remove syncMode from destinations
    await migration.bulkUpdate(
      "destinations",
      {
        syncMode: null,
      },
      {
        id: destinations.map((d) => d.id),
      }
    );
  },
};
