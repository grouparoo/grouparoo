module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "teamMembers",
      {
        guid: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },

        teamGuid: {
          type: DataTypes.UUID,
          allowNull: false,
        },

        firstName: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        lastName: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        email: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        passwordHash: {
          type: DataTypes.TEXT,
          allowNull: true,
        },

        lastLoginAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
      },
      {
        charset: "utf8mb4",
      }
    );

    await migration.addIndex("teamMembers", ["email"], {
      unique: true,
      fields: "email",
    });
  },

  down: async function (migration) {
    await migration.dropTable("teamMembers");
  },
};
