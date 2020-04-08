const TABLE = "schedules";

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

      sourceGuid: {
        type: DataTypes.STRING(40),
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

      recurring: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      recurringFrequency: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    });

    await migration.addIndex(TABLE, ["name"], {
      unique: true,
      fields: ["name"],
    });

    await migration.addIndex(TABLE, ["sourceGuid"], {
      fields: ["sourceGuid"],
    });
  },

  down: async function (migration) {
    await migration.dropTable(TABLE);
  },
};
