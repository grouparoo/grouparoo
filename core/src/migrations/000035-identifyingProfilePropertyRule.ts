import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
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
      const rule: Record<string, any> = results[0];
      await queryInterface.sequelize.query(
        `update "profilePropertyRules" set identifying=true where guid='${rule["guid"]}'`
      );
    }
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("profilePropertyRules", "identifying");
  },
};
