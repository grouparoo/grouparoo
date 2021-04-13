export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.addColumn("profilePropertyRules", "identifying", {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      });

      // we need to pick one of the existing rules to be identifying - prefer the oldest unique rule.
      const [results] = await migration.sequelize.query(
        'select * from "profilePropertyRules" order by "unique" desc, "createdAt" desc limit 1'
      );

      if (results.length === 1) {
        const rule = results[0];
        await migration.sequelize.query(
          `update "profilePropertyRules" set identifying=true where guid='${rule.guid}'`
        );
      }
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.removeColumn("profilePropertyRules", "identifying");
    });
  },
};
