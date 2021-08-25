import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.renameTable("propertyFilters", "filters");

    await queryInterface.renameColumn("filters", "propertyId", "ownerId");

    await queryInterface.addColumn("filters", "ownerType", {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "property",
    });

    await queryInterface.changeColumn("filters", "ownerType", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await queryInterface.addIndex(
      "filters",
      ["ownerId", "ownerType", "position"],
      {
        fields: ["ownerId", "ownerType", "position"],
        unique: true,
      }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeIndex(
      "filters",
      ["ownerId", "ownerType", "position"],
      {
        fields: ["ownerId", "ownerType", "position"],
        unique: true,
      }
    );
    await queryInterface.removeColumn("filters", "ownerType");
    await queryInterface.renameColumn("filters", "ownerId", "propertyId");
    await queryInterface.renameTable("filters", "propertyFilters");
  },
};
