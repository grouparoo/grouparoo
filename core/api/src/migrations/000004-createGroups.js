module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "groups",
      {
        guid: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },

        name: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        type: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        calculatedAt: DataTypes.DATE,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
      },
      {
        charset: "utf8mb4",
      }
    );

    await migration.addIndex("groups", ["name"], {
      unique: true,
      fields: "name",
    });
  },

  down: async function (migration) {
    await migration.dropTable("groups");
  },
};
