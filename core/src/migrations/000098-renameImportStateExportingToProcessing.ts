import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.renameColumn("imports", "exportedAt", "processedAt");

    await queryInterface.sequelize.query(
      `UPDATE "imports" SET "state"='processing' WHERE "state"='exporting'`
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.renameColumn("imports", "processedAt", "exportedAt");

    await queryInterface.sequelize.query(
      `UPDATE "imports" SET "state"='exporting' WHERE "state"='processing'`
    );
  },
};
