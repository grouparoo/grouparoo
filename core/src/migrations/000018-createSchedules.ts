export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.createTable("schedules", {
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

      await migration.addIndex("schedules", ["name"], {
        unique: true,
        fields: ["name"],
      });

      await migration.addIndex("schedules", ["sourceGuid"], {
        fields: ["sourceGuid"],
      });

      await migration.addIndex("schedules", ["state"], {
        fields: ["state"],
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.dropTable("schedules");
    });
  },
};
