export default {
  up: async function (migration, DataTypes) {
    await migration.createTable("profilePropertyRules", {
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

      key: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      type: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      unique: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      sourceGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      state: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },
    });

    await migration.addIndex("profilePropertyRules", ["key"], {
      fields: ["key"],
      unique: true,
    });

    await migration.addIndex("profilePropertyRules", ["state"], {
      fields: ["state"],
    });
  },

  down: async function (migration) {
    await migration.dropTable("profilePropertyRules");
  },
};
