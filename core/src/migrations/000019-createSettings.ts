export default {
  up: async function (migration, DataTypes) {
    await migration.createTable("settings", {
      guid: {
        type: DataTypes.STRING(40),
        primaryKey: true,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
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
        type: DataTypes.TEXT,
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
    });

    await migration.addIndex("settings", ["pluginName", "key"], {
      unique: true,
      fields: ["pluginName", "key"],
    });

    await migration.addIndex("settings", ["pluginName"], {
      fields: ["pluginName"],
    });
  },

  down: async function (migration) {
    await migration.dropTable("settings");
  },
};
