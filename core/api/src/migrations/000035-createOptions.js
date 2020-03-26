module.exports = {
  up: async function (migration, DataTypes) {
    const transaction = await migration.sequelize.transaction();

    await migration.createTable(
      "options",
      {
        guid: {
          type: DataTypes.STRING(40),
          primaryKey: true,
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

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        charset: "utf8mb4",
        transaction,
      }
    );

    const appOptions = await migration.sequelize
      .query('SELECT * FROM "appOptions"', {
        type: migration.sequelize.QueryTypes.SELECT,
        transaction,
      })
      .map((o) => {
        o.guid = o.guid.replace(/^apo_/, "opt_");
        o.ownerType = "app";
        o.ownerGuid = o.appGuid;
        delete o.appGuid;
        return o;
      });

    const scheduleOptions = await migration.sequelize
      .query('SELECT * FROM "scheduleOptions"', {
        type: migration.sequelize.QueryTypes.SELECT,
        transaction,
      })
      .map((o) => {
        o.guid = o.guid.replace(/^scr_/, "opt_");
        o.ownerType = "schedule";
        o.ownerGuid = o.scheduleGuid;
        delete o.scheduleGuid;
        return o;
      });

    if (appOptions.length > 0) {
      await migration.bulkInsert("options", appOptions, { transaction });
    }

    if (scheduleOptions.length > 0) {
      await migration.bulkInsert("options", scheduleOptions, { transaction });
    }

    await migration.dropTable("appOptions", { transaction });
    await migration.dropTable("scheduleOptions", { transaction });

    await transaction.commit();
  },
  down: async function (migration) {
    await migration.dropTable("options");
  },
};
