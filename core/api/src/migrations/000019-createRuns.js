module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "runs",
      {
        guid: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },

        connectionGuid: {
          type: DataTypes.UUID,
          allowNull: false,
        },

        state: {
          type: DataTypes.ENUM("running", "complete"),
          allowNull: false,
        },

        profilesCount: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },

        error: {
          type: DataTypes.TEXT,
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
    await migration.dropTable("runs");
  },
};
