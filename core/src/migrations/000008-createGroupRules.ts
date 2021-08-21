import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.createTable("groupRules", {
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

      groupGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      profilePropertyRuleGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      position: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },

      match: {
        type: DataTypes.STRING(191),
        allowNull: true,
      },

      op: {
        type: DataTypes.STRING(191),
        allowNull: true,
      },

      relativeMatchNumber: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },

      relativeMatchUnit: {
        type: DataTypes.STRING(191),
        allowNull: true,
      },

      relativeMatchDirection: {
        type: DataTypes.STRING(191),
        allowNull: true,
      },
    });

    await queryInterface.addIndex("groupRules", ["groupGuid"], {
      fields: ["groupGuid"],
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.dropTable("groupRules");
  },
};
