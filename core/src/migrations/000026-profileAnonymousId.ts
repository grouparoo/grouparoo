import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("profiles", "anonymousId", {
      type: DataTypes.STRING(191),
      allowNull: true,
    });

    await queryInterface.addIndex("profiles", ["anonymousId"], {
      fields: ["anonymousId"],
      unique: true,
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("profiles", "anonymousId");
  },
};
