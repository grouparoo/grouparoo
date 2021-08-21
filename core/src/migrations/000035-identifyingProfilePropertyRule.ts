import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.addColumn("profilePropertyRules", "identifying", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    // we need to pick one of the existing rules to be identifying - prefer the oldest unique rule.
    const [results] = await queryInterface.sequelize.query(
      'select * from "profilePropertyRules" order by "unique" desc, "createdAt" desc limit 1'
    );

    if (results.length === 1) {
      const rule = results[0];
      await queryInterface.sequelize.query(
        `update "profilePropertyRules" set identifying=true where guid='${rule["guid"]}'`
      );
    }
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeColumn("profilePropertyRules", "identifying");
  },
};
