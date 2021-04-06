export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.createTable("apiKeys", {
        guid: {
          type: DataTypes.STRING(40),
          primaryKey: true,
        },

        apiKey: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        name: {
          type: DataTypes.TEXT,
          allowNull: false,
        },

        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },

        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      });

      await migration.addIndex("apiKeys", ["name"], {
        unique: true,
        fields: ["name"],
      });

      await migration.addIndex("apiKeys", ["apiKey"], {
        unique: true,
        fields: ["apiKey"],
      });

      await migration.createTable("permissions", {
        guid: {
          type: DataTypes.STRING(40),
          primaryKey: true,
        },

        ownerGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        ownerType: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        topic: {
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

        locked: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },

        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },

        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      });

      await migration.addIndex("permissions", ["ownerGuid", "topic"], {
        unique: true,
        fields: ["ownerGuid", "topic"],
      });

      await migration.removeColumn("teams", "read");
      await migration.removeColumn("teams", "write");
      await migration.removeColumn("teams", "administer");
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.dropTable("apiKeys");
      await migration.dropTable("permissions");
    });
  },
};
