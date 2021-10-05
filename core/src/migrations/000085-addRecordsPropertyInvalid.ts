import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("records", "invalid", {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    });

    await queryInterface.changeColumn("records", "invalid", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("records", "invalid");
  },
};
