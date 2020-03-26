const uuid = require("uuid");

module.exports = {
  up: async function (migration, DataTypes) {
    const transaction = await migration.sequelize.transaction();

    await migration.createTable(
      "sources",
      {
        guid: {
          type: DataTypes.STRING(40),
          primaryKey: true,
        },

        appGuid: {
          type: DataTypes.STRING(40),
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

    await migration.addColumn("schedules", "sourceGuid", DataTypes.STRING(40), {
      transaction,
    });

    const schedules = await migration.sequelize.query(
      'SELECT * FROM "schedules"',
      {
        type: migration.sequelize.QueryTypes.SELECT,
        transaction,
      }
    );

    if (schedules.length > 0) {
      const now = new Date();

      for (const i in schedules) {
        const schedule = schedules[i];
        const sourceGuid = `src_${uuid.v4()}`;

        const source = {
          guid: sourceGuid,
          appGuid: schedule.appGuid,
          createdAt: now,
          updatedAt: now,
        };

        await migration.bulkInsert("sources", [source], { transaction });

        await migration.sequelize.query(
          `update schedules set "sourceGuid" = '${sourceGuid}' where guid = '${schedule.guid}'`,
          { transaction }
        );
      }
    }

    await migration.removeColumn("schedules", "appGuid", {
      transaction,
    });

    await transaction.commit();

    // the table needs to exist before adding an index
    // this doesn't work within the transaction
    await migration.addIndex("sources", ["appGuid"], {
      unique: true,
      fields: "appGuid",
    });
  },

  down: async function (migration) {
    // TODO: reverse the data and populate schedule#appGuid
    await migration.addColumn("schedules", "appGuid", DataTypes.STRING(40));
    await migration.removeColumn("schedules", "sourceGuid");
    await migration.dropTable("sources");
  },
};
