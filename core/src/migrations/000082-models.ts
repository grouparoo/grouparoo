import Sequelize from "sequelize";

const default_model = "mod_profiles";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    // TODO: Determine the default model's id

    await queryInterface.addColumn("records", "modelId", {
      type: DataTypes.STRING(191),
      defaultValue: default_model,
      allowNull: true,
    });

    await queryInterface.changeColumn("records", "modelId", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await queryInterface.addColumn("sources", "modelId", {
      type: DataTypes.STRING(191),
      defaultValue: default_model,
      allowNull: true,
    });

    await queryInterface.changeColumn("sources", "modelId", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await queryInterface.addColumn("groups", "modelId", {
      type: DataTypes.STRING(191),
      defaultValue: default_model,
      allowNull: true,
    });

    await queryInterface.changeColumn("groups", "modelId", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await queryInterface.addColumn("destinations", "modelId", {
      type: DataTypes.STRING(191),
      defaultValue: default_model,
      allowNull: true,
    });

    await queryInterface.changeColumn("destinations", "modelId", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.dropTable("models");
  },
};
