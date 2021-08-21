import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
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

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    throw new Error("migration cannot be reversed");
  },
};
