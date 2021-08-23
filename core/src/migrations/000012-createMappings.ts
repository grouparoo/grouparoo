import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.createTable("mappings", {
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

      ownerGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      ownerType: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      profilePropertyRuleGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      remoteKey: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },
    });

    await queryInterface.addIndex(
      "mappings",
      ["ownerGuid", "profilePropertyRuleGuid"],
      {
        unique: true,
        fields: ["ownerGuid", "profilePropertyRuleGuid"],
      }
    );

    await queryInterface.addIndex("mappings", ["ownerGuid", "remoteKey"], {
      unique: true,
      fields: ["ownerGuid", "remoteKey"],
    });

    await queryInterface.addIndex("mappings", ["ownerGuid"], {
      fields: ["ownerGuid"],
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.dropTable("mappings");
  },
};
