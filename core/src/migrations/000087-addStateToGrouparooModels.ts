import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("models", "state", {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "ready",
    });
    await queryInterface.changeColumn("models", "state", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });
    await queryInterface.addIndex("models", ["state"], {
      fields: ["state"],
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("models", "state");
  },
};
