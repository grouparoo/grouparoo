import Sequelize, { DataTypes } from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.addColumn("destinations", "deliveryMode", {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "continual",
    });
    await queryInterface.changeColumn("destinations", "deliveryMode", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("destinations", "deliveryMode");
  },
};
