module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "logs",
      {
        guid: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },

        topic: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        verb: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        who: {
          type: DataTypes.STRING(191),
          allowNull: true,
        },

        data: {
          type: DataTypes.TEXT,
          allowNull: false,
        },

        message: {
          type: DataTypes.TEXT,
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
    await migration.dropTable("logs");
  },
};
