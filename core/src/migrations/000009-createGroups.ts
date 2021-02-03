export default {
  up: async function (migration, DataTypes) {
    await migration.createTable("groups", {
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

      matchType: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      calculatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    });

    await migration.addIndex("groups", ["name"], {
      unique: true,
      fields: ["name"],
    });

    await migration.addIndex("groups", ["state"], {
      fields: ["state"],
    });
  },

  down: async function (migration) {
    await migration.dropTable("groups");
  },
};
