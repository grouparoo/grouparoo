const TABLE = "exports";

module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(TABLE, {
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

      errorMessage: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    });

    await migration.addIndex(TABLE, ["profileGuid"], {
      fields: ["profileGuid"],
    });

    await migration.addIndex(TABLE, ["destinationGuid"], {
      fields: ["destinationGuid"],
    });
  },

  down: async function (migration) {
    await migration.dropTable(TABLE);
  },
};
