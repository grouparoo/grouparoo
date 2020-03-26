module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "teams",
      {
        guid: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },

        name: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        read: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },

        write: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },

        administer: {
          type: DataTypes.BOOLEAN,
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

    await migration.addIndex("teams", ["name"], {
      unique: true,
      fields: "name",
    });
  },

  down: async function (migration) {
    await migration.dropTable("teams");
  },
};
