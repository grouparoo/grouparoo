import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.sequelize.query(
      `UPDATE "options" SET "ownerType"='property' WHERE "ownerType"='profilePropertyRule'`
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.sequelize.query(
      `UPDATE "options" SET "ownerType"='profilePropertyRule' WHERE "ownerType"='property';`
    );
  },
};
