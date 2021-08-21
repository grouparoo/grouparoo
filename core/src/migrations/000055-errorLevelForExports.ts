import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.addColumn("exports", "errorLevel", {
      type: DataTypes.STRING(191),
      allowNull: true,
      defaultValue: null,
    });

    await queryInterface.sequelize.query(
      `UPDATE "exports" SET "errorLevel"='error' WHERE "errorMessage" IS NOT NULL`
    );
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeColumn("exports", "errorLevel");
  },
};
