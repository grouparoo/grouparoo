const TABLE = "groups";

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

    await migration.addIndex(TABLE, ["name"], {
      unique: true,
      fields: ["name"],
    });
  },

  down: async function (migration) {
    await migration.dropTable(TABLE);
  },
};
