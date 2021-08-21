import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.sequelize.query(
      `UPDATE "groupRules" set "profileColumn" = 'grouparooId' WHERE "profileColumn" = 'id' AND "propertyId" IS NULL;`
    );
    await queryInterface.sequelize.query(
      `UPDATE "groupRules" set "profileColumn" = 'grouparooCreatedAt' WHERE "profileColumn" = 'createdAt' AND "propertyId" IS NULL;`
    );
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.sequelize.query(
      `UPDATE "groupRules" set "profileColumn" = 'id' WHERE "profileColumn" = 'grouparooId' AND "propertyId" IS NULL;`
    );
    await queryInterface.sequelize.query(
      `UPDATE "groupRules" set "profileColumn" = 'createdAt' WHERE "profileColumn" = 'grouparooCreatedAt' AND "propertyId" IS NULL;`
    );
  },
};
