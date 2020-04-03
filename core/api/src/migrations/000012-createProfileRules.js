module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "profilePropertyRules",
      {
        guid: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },

        key: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        type: {
          type: DataTypes.STRING(191),
          allowNull: false,
          defaultValue: "string",
        },

        unique: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },

        source: {
          type: DataTypes.STRING(191),
          allowNull: false,
          defaultValue: "manual",
        },

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
      },
      {
        charset: "utf8mb4",
      }
    );

    await migration.addIndex("profilePropertyRules", ["key"], {
      unique: true,
      fields: ["key"],
    });
  },

  down: async function (migration) {
    await migration.dropTable("profilePropertyRules");
  },
};
