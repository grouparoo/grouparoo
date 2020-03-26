module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "appOptions",
      {
        guid: {
          type: DataTypes.STRING(40),
          primaryKey: true,
        },

        appGuid: {
          type: DataTypes.STRING(40),
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

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        charset: "utf8mb4",
      }
    );

    await migration.addIndex("appOptions", ["appGuid", "key"], {
      unique: true,
      fields: ["appGuid", "key"],
    });

    await migration.removeColumn("apps", "options");
  },

  down: async function (migration) {
    await migration.dropTable("appOptions");

    await migration.addColumn("apps", "options", {
      type: DataTypes.TEXT,
      allowNull: true,
    });
  },
};
