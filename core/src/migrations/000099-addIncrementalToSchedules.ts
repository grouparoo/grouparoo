import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("schedules", "incremental", {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    });

    const [incrementalSources]: [Record<string, any>[], unknown] =
      await queryInterface.sequelize.query(
        `SELECT * FROM "sources" WHERE type LIKE '%-import-table'`
      );

    if (incrementalSources.length > 0) {
      await queryInterface.sequelize.query(
        `UPDATE schedules SET incremental=true WHERE id IN (${incrementalSources
          .map((s) => s.id)
          .join(", ")})`
      );
    }

    await queryInterface.changeColumn("schedules", "incremental", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("schedules", "incremental");
  },
};
