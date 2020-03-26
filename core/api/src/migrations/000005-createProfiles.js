module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "profiles",
      {
        guid: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },

        primaryProperty: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        remoteId: {
          type: DataTypes.STRING(191),
          allowNull: true,
        },

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
      },
      {
        charset: "utf8mb4",
      }
    );
  },

  down: async function (migration) {
    await migration.dropTable("profiles");
  },
};
