export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.createTable("options", {
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

        ownerType: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        key: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        value: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      });

      await migration.addIndex("options", ["ownerGuid", "key"], {
        unique: true,
        fields: ["ownerGuid", "key"],
      });

      await migration.addIndex("options", ["ownerGuid"], {
        fields: ["ownerGuid"],
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.dropTable("options");
    });
  },
};
