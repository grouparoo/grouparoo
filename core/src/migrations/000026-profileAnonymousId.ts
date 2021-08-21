import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
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

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeColumn("profiles", "anonymousId");
  },
};
