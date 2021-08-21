import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
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
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.changeColumn("groupRules", "profilePropertyRuleGuid", {
      type: DataTypes.STRING(40),
      allowNull: false,
    });

    await queryInterface.removeColumn("groupRules", "profileColumn");
  },
};
