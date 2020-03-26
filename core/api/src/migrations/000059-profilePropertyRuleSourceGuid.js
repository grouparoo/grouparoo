module.exports = {
  up: async function (migration, DataTypes) {
    const transaction = await migration.sequelize.transaction();

    await migration.renameColumn(
      "profilePropertyRules",
      "appGuid",
      "sourceGuid",
      { transaction }
    );

    const rules = await migration.sequelize.query(
      'SELECT * FROM "profilePropertyRules"',
      {
        type: migration.sequelize.QueryTypes.SELECT,
        transaction,
      }
    );

    for (const i in rules) {
      const rule = rules[i];
      const sources = await migration.sequelize.query(
        `SELECT * FROM "sources" where "appGuid"='${rule.sourceGuid}'`,
        {
          type: migration.sequelize.QueryTypes.SELECT,
        }
      );

      if (sources.length > 0) {
        const newSourceGuid = sources[0].guid;
        const query = `UPDATE "profilePropertyRules" SET "sourceGuid" = '${newSourceGuid}' where guid = '${rule.guid}'`;
        await migration.sequelize.query(query, { transaction });
      } else {
        throw new Error(
          "To run this migration, every existing Profile Property Rule's Apps need a source that the rule can be moved to.  Create a source or delete the rule :" +
            rule.key
        );
      }
    }

    await transaction.commit();
  },

  down: async function (migration, DataTypes) {
    await migration.renameColumn(
      "profilePropertyRules",
      "sourceGuid",
      "appGuid"
    );
  },
};
