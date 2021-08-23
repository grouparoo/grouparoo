import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.createTable("exportProcessors", {
      id: {
        type: DataTypes.STRING(191),
        primaryKey: true,
      },

      state: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      remoteKey: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      processAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      startedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      completedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      destinationId: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      errorMessage: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      errorLevel: {
        type: DataTypes.STRING(191),
        allowNull: true,
      },

      retryCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });

    await queryInterface.addColumn("exports", "exportProcessorId", {
      type: DataTypes.STRING(191),
      allowNull: true,
    });

    await queryInterface.addIndex("exportProcessors", ["destinationId"], {
      fields: ["destinationId"],
    });

    await queryInterface.addIndex("exportProcessors", ["state"], {
      fields: ["state"],
    });

    await queryInterface.addIndex("exportProcessors", ["processAt"], {
      fields: ["processAt"],
    });

    await queryInterface.addIndex("exportProcessors", ["createdAt"], {
      fields: ["createdAt"],
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("exports", "exportProcessorId");
    await queryInterface.dropTable("exportProcessors", {});
  },
};
