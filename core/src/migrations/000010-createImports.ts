import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.createTable("imports", {
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

      creatorType: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      creatorGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      profileGuid: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },

      data: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      rawData: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      oldProfileProperties: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      newProfileProperties: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      oldGroupGuids: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      newGroupGuids: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      profileAssociatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      profileUpdatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      groupsUpdatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      exportedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      errorMessage: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      errorMetadata: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    });

    await queryInterface.addIndex("imports", ["creatorGuid"], {
      fields: ["creatorGuid"],
    });

    await queryInterface.addIndex("imports", ["profileGuid"], {
      fields: ["profileGuid"],
    });

    await queryInterface.addIndex("imports", ["profileUpdatedAt"], {
      fields: ["profileUpdatedAt"],
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.dropTable("imports");
  },
};
