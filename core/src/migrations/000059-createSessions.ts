export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.createTable("sessions", {
        id: {
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

        teamMemberId: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        fingerprint: {
          type: DataTypes.TEXT,
          allowNull: false,
        },

        expiresAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      });

      await migration.addIndex("sessions", ["fingerprint"], {
        unique: true,
        fields: ["fingerprint"],
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.dropTable("sessions");
    });
  },
};
