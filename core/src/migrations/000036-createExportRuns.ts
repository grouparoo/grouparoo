import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.createTable("exportRuns", {
      guid: {
        type: DataTypes.STRING(40),
        primaryKey: true,
      },

      exportGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      runGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });

    await queryInterface.addIndex("exportRuns", ["exportGuid", "runGuid"], {
      unique: true,
      fields: ["exportGuid", "runGuid"],
    });

    await queryInterface.removeColumn("exports", "runGuids");
  },

  down: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.dropTable("exportRuns");

    await queryInterface.addColumn("exports", "runGuids", {
      type: DataTypes.TEXT,
      allowNull: true,
    });
  },
};
