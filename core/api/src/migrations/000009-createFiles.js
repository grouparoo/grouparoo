module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "files",
      {
        guid: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },

        transport: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        type: {
          type: DataTypes.TEXT,
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

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        charset: "utf8mb4",
      }
    );
  },

  down: async function (migration) {
    await migration.dropTable("files");
  },
};
