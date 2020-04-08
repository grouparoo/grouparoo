const TABLE = "teams";

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

      read: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      write: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      administer: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      deletable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
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
