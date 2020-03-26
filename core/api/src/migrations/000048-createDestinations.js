module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "destinations",
      {
        guid: {
          type: DataTypes.STRING(40),
          primaryKey: true,
        },

        appGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        name: {
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
    await migration.dropTable("destinations");
  },
};
