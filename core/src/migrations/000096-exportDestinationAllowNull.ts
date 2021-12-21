import Sequelize, { DataTypes } from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.changeColumn("exports", "destinationId", {
      type: DataTypes.STRING(191),
      allowNull: true,
    });
  },

  down: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.changeColumn("exports", "destinationId", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });
  },
};
