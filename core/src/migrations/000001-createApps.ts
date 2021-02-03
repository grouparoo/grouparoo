export default {
  up: async function (migration, DataTypes) {
    await migration.createTable("apps", {
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

      name: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      type: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      state: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },
    });

    await migration.addIndex("apps", ["name"], {
      unique: true,
      fields: ["name"],
    });

    await migration.addIndex("apps", ["state"], {
      fields: ["state"],
    });
  },

  down: async function (migration) {
    await migration.dropTable("apps");
  },
};
