module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "scheduleOptions",
      {
        guid: {
          type: DataTypes.STRING(40),
          primaryKey: true,
        },

        scheduleGuid: {
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

    await migration.addIndex("scheduleOptions", ["scheduleGuid", "key"], {
      unique: true,
      fields: ["scheduleGuid", "key"],
    });

    await migration.removeColumn("schedules", "options");
  },

  down: async function (migration) {
    await migration.dropTable("scheduleOptions");

    await migration.addColumn("schedules", "options", {
      type: DataTypes.TEXT,
      allowNull: true,
    });
  },
};
