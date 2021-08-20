export default {
  up: async function (migration, DataTypes) {
    await migration.createTable("logs", {
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

    await migration.addIndex("logs", ["topic"], {
      fields: ["topic"],
    });

    await migration.addIndex("logs", ["ownerGuid"], {
      fields: ["ownerGuid"],
    });

    await migration.addIndex("logs", ["createdAt"], {
      fields: ["createdAt"],
    });
  },

  down: async function (migration) {
    await migration.dropTable("logs");
  },
};
