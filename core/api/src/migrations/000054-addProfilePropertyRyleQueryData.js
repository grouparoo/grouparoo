module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("profilePropertyRules", "queryData", {
      type: DataTypes.TEXT,
      allowNull: true,
    });

    const rules = await migration.sequelize.query(
      'SELECT * FROM "profilePropertyRules"',
      {
        type: migration.sequelize.QueryTypes.SELECT,
      }
    );

    for (const i in rules) {
      const rule = rules[i];
      if (rule.query) {
        const json = JSON.stringify({
          mode: "advanced",
          query: rule.query.replace(/'/g, "''"),
        });
        const query = `UPDATE "profilePropertyRules" SET "queryData" = '${json}' where guid = '${rule.guid}'`;
        await migration.sequelize.query(query);
      }
    }

    await migration.removeColumn("profilePropertyRules", "query");
  },

  down: async function (migration, DataTypes) {
    await migration.removeColumn("profilePropertyRules", "queryData");

    await migration.addColumn("profilePropertyRules", "query", {
      type: DataTypes.TEXT,
      allowNull: true,
    });
  },
};
