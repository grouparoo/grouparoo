import Sequelize from "sequelize";
import * as uuid from "uuid";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    const allProperties = [];
    const newOptions = [];
    const [sources] = await queryInterface.sequelize.query(
      `SELECT * FROM "sources" WHERE type = 'google-sheet-import'`
    );
    for (const source of sources) {
      const [properties] = await queryInterface.sequelize.query(
        `SELECT * FROM "properties" WHERE "sourceId" = '${source["id"]}'`
      );
      allProperties.push(...properties);
    }
    for (const property of allProperties) {
      newOptions.push({
        id: `opt_${uuid.v4()}`,
        createdAt: new Date(),
        updatedAt: new Date(),
        ownerId: property["id"],
        ownerType: "property",
        key: "aggregationMethod",
        value: "exact",
        type: "string",
      });
    }
    if (newOptions.length > 0) {
      await queryInterface.bulkInsert("options", newOptions);
    }
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    const allProperties = [];
    const [sources] = await queryInterface.sequelize.query(
      `SELECT * FROM "sources" WHERE type = 'google-sheet-import'`
    );
    for (const source of sources) {
      const [properties] = await queryInterface.sequelize.query(
        `SELECT * FROM "properties" WHERE "sourceId" = '${source["id"]}'`
      );
      allProperties.push(...properties);
    }
    const propertiesIds = allProperties.map((property) => property.id);
    if (propertiesIds.length > 0) {
      await queryInterface.sequelize.query(
        `DELETE FROM "options" WHERE "key"='aggregationMethod' AND "ownerId" IN(?)`,
        {
          replacements: [propertiesIds],
        }
      );
    }
  },
};
