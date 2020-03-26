module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "groupCounts",
      {
        guid: {
          type: DataTypes.STRING(40),
          primaryKey: true,
        },

        groupGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        count: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },

        rules: {
          type: DataTypes.TEXT,
          allowNull: false,
        },

        componentCounts: {
          type: DataTypes.TEXT,
          allowNull: false,
        },

        funnelCounts: {
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
    await migration.dropTable("groupCounts");
  },
};
