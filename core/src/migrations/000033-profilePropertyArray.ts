import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("profileProperties", "position", {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    });

    await queryInterface.addColumn("profilePropertyRules", "isArray", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await queryInterface.removeIndex(
      "profileProperties",
      ["profileGuid", "profilePropertyRuleGuid"],
      {
        unique: true,
        fields: ["profileGuid", "profilePropertyRuleGuid"],
      }
    );

    await queryInterface.addIndex(
      "profileProperties",
      ["profileGuid", "profilePropertyRuleGuid", "position"],
      {
        unique: true,
        fields: ["profileGuid", "profilePropertyRuleGuid", "position"],
      }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("profileProperties", "position");
    await queryInterface.removeColumn("profilePropertyRules", "isArray");

    await queryInterface.removeIndex(
      "profileProperties",
      ["profileGuid", "profilePropertyRuleGuid", "position"],
      {
        unique: true,
        fields: ["profileGuid", "profilePropertyRuleGuid", "position"],
      }
    );

    await queryInterface.addIndex(
      "profileProperties",
      ["profileGuid", "profilePropertyRuleGuid"],
      {
        unique: true,
        fields: ["profileGuid", "profilePropertyRuleGuid"],
      }
    );
  },
};
