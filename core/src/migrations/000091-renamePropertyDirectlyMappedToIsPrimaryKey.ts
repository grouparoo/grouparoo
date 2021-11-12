import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.renameColumn(
      "properties",
      "directlyMapped",
      "isPrimaryKey"
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.renameColumn(
      "properties",
      "isPrimaryKey",
      "directlyMapped"
    );
  },
};
