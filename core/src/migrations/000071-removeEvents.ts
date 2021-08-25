import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.dropTable("eventData");
    await queryInterface.dropTable("events");
    await queryInterface.removeColumn("profiles", "anonymousId");
    await queryInterface.sequelize.query(
      `DELETE FROM "permissions" WHERE topic = 'event'`
    );

    const [apps] = await queryInterface.sequelize.query(
      `SELECT * FROM "apps" WHERE type = 'events'`
    );
    for (const app of apps) {
      const [sources] = await queryInterface.sequelize.query(
        `SELECT * FROM "sources" WHERE "appId" = '${app["id"]}'`
      );
      for (const source of sources) {
        const [properties] = await queryInterface.sequelize.query(
          `SELECT * FROM "properties" WHERE "sourceId" = '${source["id"]}'`
        );

        for (const property of properties) {
          await queryInterface.sequelize.query(
            `DELETE FROM "runs" WHERE "creatorId" = '${property["id"]}'`
          );
          await queryInterface.sequelize.query(
            `DELETE FROM "options" WHERE "ownerId" = '${property["id"]}'`
          );
          await queryInterface.sequelize.query(
            `DELETE FROM "propertyFilters" WHERE "propertyId" = '${property["id"]}'`
          );
          await queryInterface.sequelize.query(
            `DELETE FROM "profileProperties" WHERE "propertyId" = '${property["id"]}'`
          );
          await queryInterface.sequelize.query(
            `DELETE FROM "groupRules" WHERE "propertyId" = '${property["id"]}'`
          );
          await queryInterface.sequelize.query(
            `DELETE FROM "mappings" WHERE "propertyId" = '${property["id"]}'`
          );
          await queryInterface.sequelize.query(
            `DELETE FROM "properties" WHERE "id" = '${property["id"]}'`
          );
        }

        await queryInterface.sequelize.query(
          `DELETE FROM "options" WHERE "ownerId" = '${source["id"]}'`
        );
        await queryInterface.sequelize.query(
          `DELETE FROM "mappings" WHERE "ownerId" = '${source["id"]}'`
        );
        await queryInterface.sequelize.query(
          `DELETE FROM "sources" WHERE "id" = '${source["id"]}'`
        );
      }

      await queryInterface.sequelize.query(
        `DELETE FROM "options" WHERE "ownerId" = '${app["id"]}'`
      );
      await queryInterface.sequelize.query(
        `DELETE FROM "apps" WHERE "id" = '${app["id"]}'`
      );
    }
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    throw new Error("irreversible migration");
  },
};
