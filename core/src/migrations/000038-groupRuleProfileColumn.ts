import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.changeColumn("groupRules", "profilePropertyRuleGuid", {
      type: DataTypes.STRING(40),
      allowNull: true,
    });

    await queryInterface.addColumn("groupRules", "profileColumn", {
      type: DataTypes.STRING(191),
      allowNull: true,
    });
  },

  down: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.changeColumn("groupRules", "profilePropertyRuleGuid", {
      type: DataTypes.STRING(40),
      allowNull: false,
    });

    await queryInterface.removeColumn("groupRules", "profileColumn");
  },
};
