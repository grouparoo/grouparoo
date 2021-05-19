import { Op } from "sequelize";

export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.createTable("exportProcessors", {
        id: {
          type: DataTypes.STRING(191),
          primaryKey: true,
        },

        state: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        remoteKey: {
          type: DataTypes.STRING(191),
          allowNull: true,
          defaultValue: null,
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

      await migration.addColumn("exports", "exportProcessorId", {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: null,
      });

      await migration.addIndex("exportProcessors", ["destinationId"], {
        fields: ["destinationId"],
      });

      await migration.addIndex("exportProcessors", ["state"], {
        fields: ["state"],
      });

      await migration.addIndex("exportProcessors", ["processAt"], {
        fields: ["processAt"],
      });

      await migration.addIndex("exportProcessors", ["createdAt"], {
        fields: ["createdAt"],
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.sequelize.transaction(async () => {
        await migration.removeColumn("exports", "exportProcessorId");
        await migration.dropTable("exportProcessors");
      });
    });
  },
};
