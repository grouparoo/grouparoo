module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "events",
      {
        guid: {
          type: DataTypes.STRING(40),
          primaryKey: true,
        },

        sourceType: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        sourceGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        profileGuid: {
          type: DataTypes.STRING(40),
        },

        data: {
          type: DataTypes.TEXT,
        },

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        profileAssociatedAt: DataTypes.DATE,
        profileUpdatedAt: DataTypes.DATE,
        groupsUpdatedAt: DataTypes.DATE,
        exportedAt: DataTypes.DATE,

        oldProfileProperties: {
          type: DataTypes.TEXT,
        },
        newProfileProperties: {
          type: DataTypes.TEXT,
        },

        oldGroupGuids: {
          type: DataTypes.TEXT,
        },
        newGroupGuids: {
          type: DataTypes.TEXT,
        },

        errorMessage: DataTypes.TEXT,
        errorMetadata: DataTypes.TEXT,
      },
      {
        charset: "utf8mb4",
      }
    );
  },

  down: async function (migration) {
    await migration.dropTable("events");
  },
};
