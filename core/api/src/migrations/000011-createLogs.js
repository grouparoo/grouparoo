const TABLE = "logs";

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

      ownerGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      topic: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      verb: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      who: {
        type: DataTypes.STRING(191),
        allowNull: true,
      },

      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      data: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });

    await migration.addIndex(TABLE, ["topic"], {
      fields: ["topic"],
    });

    await migration.addIndex(TABLE, ["ownerGuid"], {
      fields: ["ownerGuid"],
    });

    await migration.addIndex(TABLE, ["createdAt"], {
      fields: ["createdAt"],
    });
  },

  down: async function (migration) {
    await migration.dropTable(TABLE);
  },
};
