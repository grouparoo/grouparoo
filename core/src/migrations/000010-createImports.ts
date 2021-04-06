export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.createTable("imports", {
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

      await migration.addIndex("imports", ["creatorGuid"], {
        fields: ["creatorGuid"],
      });

      await migration.addIndex("imports", ["profileGuid"], {
        fields: ["profileGuid"],
      });

      await migration.addIndex("imports", ["profileUpdatedAt"], {
        fields: ["profileUpdatedAt"],
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.dropTable("imports");
    });
  },
};
