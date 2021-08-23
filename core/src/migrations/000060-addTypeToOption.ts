import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("options", "type", {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "string",
    });

    await queryInterface.changeColumn("options", "type", {
      type: DataTypes.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("options", "type");
  },
};
