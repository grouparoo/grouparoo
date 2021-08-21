import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.createTable("profileProperties", {
      guid: {
        type: DataTypes.STRING(40),
        primaryKey: true,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      profileGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      rawValue: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      profilePropertyRuleGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
    });

    await queryInterface.addIndex(
      "profileProperties",
      ["profileGuid", "profilePropertyRuleGuid"],
      {
        unique: true,
        fields: ["profileGuid", "profilePropertyRuleGuid"],
      }
    );

    await queryInterface.addIndex("profileProperties", ["profileGuid"], {
      fields: ["profileGuid"],
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.dropTable("profileProperties");
  },
};
