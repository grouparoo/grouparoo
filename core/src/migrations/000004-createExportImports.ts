import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.createTable("exportImports", {
      guid: {
        type: DataTypes.STRING(40),
        primaryKey: true,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      importGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      exportGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
    });

    await queryInterface.addIndex(
      "exportImports",
      ["importGuid", "exportGuid"],
      {
        unique: true,
        fields: ["importGuid", "exportGuid"],
      }
    );
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.dropTable("exportImports");
  },
};
