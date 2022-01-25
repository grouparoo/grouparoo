import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("schedules", "incremental", {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    });

    const [nonIncrementalSources]: [Record<string, any>[], unknown] =
      await queryInterface.sequelize.query(
        `SELECT * FROM "sources" WHERE type IN ('csv-import-table', 'google-sheet-import')`
      );

    if (nonIncrementalSources.length > 0) {
      await queryInterface.sequelize.query(
        `UPDATE schedules SET incremental=false WHERE id IN (${nonIncrementalSources
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
