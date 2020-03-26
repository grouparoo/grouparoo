module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "hops",
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

        type: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        options: {
          type: DataTypes.TEXT,
          allowNull: false,
        },

        direction: {
          type: DataTypes.ENUM("import", "export"),
          allowNull: false,
        },

        recurring: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },

        recurringFrequency: {
          type: DataTypes.BIGINT,
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

    await migration.addIndex("hops", ["name"], {
      unique: true,
      fields: ["name"],
    });
  },

  down: async function (migration) {
    await migration.dropTable("hops");
  },
};
