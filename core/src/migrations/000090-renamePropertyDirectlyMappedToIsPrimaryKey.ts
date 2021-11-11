import Sequelize from "sequelize";

// TODO: Type as migration?
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
