import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("appRefreshQueries", "recurringFrequency", {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 60 * 1000,
    });
    await queryInterface.changeColumn(
      "appRefreshQueries",
      "recurringFrequency",
      {
        type: DataTypes.BIGINT,
        allowNull: true,
      }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn(
      "appRefreshQueries",
      "recurringFrequency"
    );
  },
};
