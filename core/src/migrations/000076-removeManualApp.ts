import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    const [apps]: [Record<string, any>[], unknown] =
      await queryInterface.sequelize.query(
        `SELECT * FROM "apps" WHERE type = 'manual'`
      );
    for (const app of apps) {
      const [sources]: [Record<string, any>[], unknown] =
        await queryInterface.sequelize.query(
          `SELECT * FROM "sources" WHERE "appId" = '${app["id"]}'`
        );
      for (const source of sources) {
        const [properties]: [Record<string, any>[], unknown] =
          await queryInterface.sequelize.query(
            `SELECT * FROM "properties" WHERE "sourceId" = '${source["id"]}'`
          );

        for (const property of properties) {
          await queryInterface.sequelize.query(
            `DELETE FROM "runs" WHERE "creatorId" = '${property["id"]}'`
          );
          await queryInterface.sequelize.query(
            `DELETE FROM "options" WHERE "ownerId" = '${property["id"]}' AND "ownerType" = 'property'`
          );
          await queryInterface.sequelize.query(
            `DELETE FROM "filters" WHERE "ownerId" = '${property["id"]}' AND "ownerType" = 'property'`
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
          `DELETE FROM "options" WHERE "ownerId" = '${source["id"]}' AND "ownerType" = 'source'`
        );
        await queryInterface.sequelize.query(
          `DELETE FROM "mappings" WHERE "ownerId" = '${source["id"]}'`
        );
        await queryInterface.sequelize.query(
          `DELETE FROM "sources" WHERE "id" = '${source["id"]}'`
        );
      }

      await queryInterface.sequelize.query(
        `DELETE FROM "options" WHERE "ownerId" = '${app["id"]}' AND "ownerType" = 'app'`
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
