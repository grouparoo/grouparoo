import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("settings", "title", {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "",
    });

    await queryInterface.addColumn("settings", "variant", {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "",
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("settings", "title");
    await queryInterface.removeColumn("settings", "variant");
  },
};
