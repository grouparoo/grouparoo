export default {
  up: async function (migration, DataTypes) {
    await migration.dropTable("eventData");
    await migration.dropTable("events");
    await migration.removeColumn("profiles", "anonymousId");
    await migration.sequelize.query(
      `DELETE FROM "permissions" WHERE topic = 'event'`
    );

    const [apps] = await migration.sequelize.query(
      `SELECT * FROM "apps" WHERE type = 'events'`
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
            `DELETE FROM "options" WHERE "ownerId" = '${property.id}'`
          );
          await migration.sequelize.query(
            `DELETE FROM "propertyFilters" WHERE "propertyId" = '${property.id}'`
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
          `DELETE FROM "options" WHERE "ownerId" = '${source.id}'`
        );
        await migration.sequelize.query(
          `DELETE FROM "mappings" WHERE "ownerId" = '${source.id}'`
        );
        await migration.sequelize.query(
          `DELETE FROM "sources" WHERE "id" = '${source.id}'`
        );
      }

      await migration.sequelize.query(
        `DELETE FROM "options" WHERE "ownerId" = '${app.id}'`
      );
      await migration.sequelize.query(
        `DELETE FROM "apps" WHERE "id" = '${app.id}'`
      );
    }
  },

  down: async function (migration) {
    throw new Error("irreversible migration");
  },
};
