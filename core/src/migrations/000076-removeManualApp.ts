export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      const [apps] = await migration.sequelize.query(
        `SELECT * FROM "apps" WHERE type = 'manual'`
      );
      for (const app of apps) {
        const [sources] = await migration.sequelize.query(
          `SELECT * FROM "sources" WHERE "appId" = '${app.id}'`
        );
        for (const source of sources) {
          const [properties] = await migration.sequelize.query(
            `SELECT * FROM "properties" WHERE "sourceId" = '${source.id}'`
          );

          for (const property of properties) {
            await migration.sequelize.query(
              `DELETE FROM "runs" WHERE "creatorId" = '${property.id}'`
            );
            await migration.sequelize.query(
              `DELETE FROM "options" WHERE "ownerId" = '${property.id}' AND "ownerType" = 'property'`
            );
            await migration.sequelize.query(
              `DELETE FROM "filters" WHERE "ownerId" = '${property.id}' AND "ownerType" = 'property'`
            );
            await migration.sequelize.query(
              `DELETE FROM "profileProperties" WHERE "propertyId" = '${property.id}'`
            );
            await migration.sequelize.query(
              `DELETE FROM "groupRules" WHERE "propertyId" = '${property.id}'`
            );
            await migration.sequelize.query(
              `DELETE FROM "mappings" WHERE "propertyId" = '${property.id}'`
            );
            await migration.sequelize.query(
              `DELETE FROM "properties" WHERE "id" = '${property.id}'`
            );
          }

          await migration.sequelize.query(
            `DELETE FROM "options" WHERE "ownerId" = '${source.id}' AND "ownerType" = 'source'`
          );
          await migration.sequelize.query(
            `DELETE FROM "mappings" WHERE "ownerId" = '${source.id}'`
          );
          await migration.sequelize.query(
            `DELETE FROM "sources" WHERE "id" = '${source.id}'`
          );
        }

        await migration.sequelize.query(
          `DELETE FROM "options" WHERE "ownerId" = '${app.id}' AND "ownerType" = 'app'`
        );
        await migration.sequelize.query(
          `DELETE FROM "apps" WHERE "id" = '${app.id}'`
        );
      }
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      throw new Error("irreversible migration");
    });
  },
};
