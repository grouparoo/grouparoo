module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "settings",
      {
        guid: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },

        pluginName: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        key: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        value: {
          type: DataTypes.STRING(191),
          allowNull: true,
        },

        defaultValue: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        description: {
          type: DataTypes.TEXT,
          allowNull: true,
        },

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        charset: "utf8mb4",
      }
    );

    await migration.addIndex("settings", ["pluginName", "key"], {
      unique: true,
      fields: ["pluginName", "key"],
    });
  },

  down: async function (migration) {
    await migration.dropTable("settings");
  },
};
