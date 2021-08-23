import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.createTable("exports", {
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

      destinationGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      oldProfileProperties: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      newProfileProperties: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      oldGroups: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      newGroups: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      errorMessage: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      toDelete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      mostRecent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      startedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      completedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    });

    await queryInterface.addIndex("exports", ["profileGuid"], {
      fields: ["profileGuid"],
    });

    await queryInterface.addIndex("exports", ["destinationGuid"], {
      fields: ["destinationGuid"],
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.dropTable("exports");
  },
};
