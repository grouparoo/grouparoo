const TABLE = "destinations";

module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(TABLE, {
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

      trackAllGroups: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    });

    await migration.addIndex(TABLE, ["name"], {
      unique: true,
      fields: ["name"],
    });

    await migration.addIndex(TABLE, ["appGuid"], {
      fields: ["appGuid"],
    });
  },

  down: async function (migration) {
    await migration.dropTable(TABLE);
  },
};
