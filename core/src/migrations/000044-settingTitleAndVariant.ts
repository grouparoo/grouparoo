import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
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

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeColumn("settings", "title");
    await queryInterface.removeColumn("settings", "variant");
  },
};
