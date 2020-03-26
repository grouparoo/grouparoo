module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "exports",
      {
        guid: {
          type: DataTypes.STRING(40),
          primaryKey: true,
        },

        destinationGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        profileGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        oldProfileProperties: DataTypes.TEXT,
        newProfileProperties: DataTypes.TEXT,
        oldGroups: DataTypes.TEXT,
        newGroups: DataTypes.TEXT,

        startedAt: DataTypes.DATE,
        completedAt: DataTypes.DATE,
        errorMessage: DataTypes.TEXT,

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        charset: "utf8mb4",
      }
    );

    await migration.createTable(
      "exportEvents",
      {
        guid: {
          type: DataTypes.STRING(40),
          primaryKey: true,
        },

        exportGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        eventGuid: {
          type: DataTypes.STRING(40),
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
    await migration.dropTable("exports");
    await migration.dropTable("exportEvents");
  },
};
