import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.createTable("runs", {
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

      creatorGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      creatorType: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      state: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      importsCreated: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },

      profilesCreated: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },

      profilesImported: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },

      profilesExported: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },

      completedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      highWaterMark: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      filter: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      error: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    });

    await queryInterface.addIndex("runs", ["creatorGuid"], {
      fields: ["creatorGuid"],
    });

    await queryInterface.addIndex("runs", ["state"], {
      fields: ["state"],
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.dropTable("runs");
  },
};
