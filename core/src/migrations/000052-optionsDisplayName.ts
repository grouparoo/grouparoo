import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    // "aggregation method" renamed to "aggregationMethod"
    await queryInterface.sequelize.query(
      `UPDATE "options" SET key='aggregationMethod' WHERE key='aggregation method' AND "ownerType" = 'profilePropertyRule'`
    );

    // "sort column" renamed to "sortColumn"
    await queryInterface.sequelize.query(
      `UPDATE "options" SET key='sortColumn' WHERE key='sort column' AND "ownerType" = 'profilePropertyRule'`
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    throw new Error("migration cannot be reversed");
  },
};
