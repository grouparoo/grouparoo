export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.addColumn("destinations", "syncMode", {
        type: DataTypes.STRING(191),
        allowNull: true,
      });

      // Pipedrive
      await migration.sequelize.query(
        `UPDATE "destinations" SET "syncMode"='sync' WHERE "state"='ready' AND "type"='pipedrive-export'`
      );

      // Intercom
      const [intercomOptions] = await migration.sequelize.query(
        `SELECT "ownerId" AS "id", "key", "value" FROM "options" o JOIN "destinations" d ON o."ownerId"=d.id WHERE "state"='ready' AND d.type='intercom-export-contacts'`
      );

      const intercomDestinations = intercomOptions.reduce((dest, opt) => {
        if (!dest[opt.id]) {
          dest[opt.id] = {};
        }
        dest[opt.id][opt.key] = opt.value;
        return dest;
      }, {});

      for (const destId in intercomDestinations) {
        const dest = intercomDestinations[destId];
        let syncMode;

        if (dest.creationMode !== "Enrich" && dest.removalMode !== "Skip") {
          // Allows creating and removing profiles
          syncMode = "sync";
        } else if (dest.removalMode === "Skip") {
          // Allows creating, but not removing profiles
          syncMode = "additive";
        } else {
          // Does not allow creating or removing profiles
          syncMode = "enrich";
        }

        await migration.sequelize.query(
          `UPDATE "destinations" SET "syncMode"=? WHERE "id"=?`,
          {
            replacements: [syncMode, destId],
          }
        );
      }

      await migration.sequelize.query(
        `UPDATE "options" SET "value"='' WHERE ("value"='Skip' OR "value"='Enrich') AND "ownerId" IN(?) AND "key" IN ('creationMode', 'removalMode')`,
        {
          replacements: [Object.keys(intercomDestinations)],
        }
      );
    });
  },

  down: async function (migration) {
    await migration.removeColumn("destinations", "syncMode");
  },
};
