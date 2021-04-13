export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.createTable("setupSteps", {
        guid: {
          type: DataTypes.STRING(40),
          primaryKey: true,
        },

        position: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },

        key: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        skipped: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },

        complete: {
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

      await migration.addIndex("setupSteps", ["key"], {
        unique: true,
        fields: ["key"],
      });
    });
  },

  down: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.dropTable("setupSteps");
    });
  },
};
