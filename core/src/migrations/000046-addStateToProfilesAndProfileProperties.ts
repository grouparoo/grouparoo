import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("profiles", "state", {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "ready",
    });

    await queryInterface.addColumn("profileProperties", "state", {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "ready",
    });

    await queryInterface.addColumn("profileProperties", "valueChangedAt", {
      type: DataTypes.DATE,
      allowNull: true,
    });
    await queryInterface.addColumn("profileProperties", "stateChangedAt", {
      type: DataTypes.DATE,
      allowNull: true,
    });
    await queryInterface.addColumn("profileProperties", "confirmedAt", {
      type: DataTypes.DATE,
      allowNull: true,
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("profiles", "state");
    await queryInterface.removeColumn("profileProperties", "state");
    await queryInterface.removeColumn("profileProperties", "valueChangedAt");
    await queryInterface.removeColumn("profileProperties", "stateChangedAt");
    await queryInterface.removeColumn("profileProperties", "confirmedAt");
  },
};
