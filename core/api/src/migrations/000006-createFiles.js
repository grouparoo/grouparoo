const TABLE = "files";

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

      transport: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      type: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      bucket: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      path: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      extension: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      mime: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      sizeBytes: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    });

    await migration.addIndex(TABLE, ["type"], {
      fields: ["type"],
    });
  },

  down: async function (migration) {
    await migration.dropTable(TABLE);
  },
};
