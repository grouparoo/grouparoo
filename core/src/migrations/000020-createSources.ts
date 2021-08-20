export default {
  up: async function (migration, DataTypes) {
    await migration.createTable("sources", {
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

      appGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      type: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      state: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },
    });

    await migration.addIndex("sources", ["name"], {
      unique: true,
      fields: ["name"],
    });

    await migration.addIndex("sources", ["appGuid"], {
      fields: ["appGuid"],
    });

    await migration.addIndex("sources", ["state"], {
      fields: ["state"],
    });
  },

  down: async function (migration) {
    await migration.dropTable("sources");
  },
};
