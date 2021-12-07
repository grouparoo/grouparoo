import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("exports", "errorLevel", {
      type: DataTypes.STRING(191),
      allowNull: true,
    });

    await queryInterface.sequelize.query(
      `UPDATE "exports" SET "errorLevel"='error' WHERE "errorMessage" IS NOT NULL`
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("exports", "errorLevel");
  },
};
