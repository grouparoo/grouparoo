export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.createTable("destinations", {
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

      await migration.addIndex("destinations", ["name"], {
        unique: true,
        fields: ["name"],
      });

      await migration.addIndex("destinations", ["appGuid"], {
        fields: ["appGuid"],
      });

      await migration.addIndex("destinations", ["state"], {
        fields: ["state"],
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.dropTable("destinations");
    });
  },
};
