import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("schedules", "incremental", {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    });

    await queryInterface.changeColumn("schedules", "incremental", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("schedules", "incremental");
  },
};
