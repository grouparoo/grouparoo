const TABLE = "runs";

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

    await migration.addIndex(TABLE, ["creatorGuid"], {
      fields: ["creatorGuid"],
    });

    await migration.addIndex(TABLE, ["state"], {
      fields: ["state"],
    });
  },

  down: async function (migration) {
    await migration.dropTable(TABLE);
  },
};
