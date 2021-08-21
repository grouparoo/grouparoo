import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.addColumn("apiKeys", "locked", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await queryInterface.addColumn("apps", "locked", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await queryInterface.addColumn("destinations", "locked", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await queryInterface.addColumn("groups", "locked", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await queryInterface.addColumn("profilePropertyRules", "locked", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await queryInterface.addColumn("sources", "locked", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await queryInterface.addColumn("schedules", "locked", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await queryInterface.addColumn("settings", "locked", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await queryInterface.addColumn("teamMembers", "locked", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeColumn("apiKeys", "locked");
    await queryInterface.removeColumn("apps", "locked");
    await queryInterface.removeColumn("destinations", "locked");
    await queryInterface.removeColumn("groups", "locked");
    await queryInterface.removeColumn("profilePropertyRules", "locked");
    await queryInterface.removeColumn("sources", "locked");
    await queryInterface.removeColumn("schedules", "locked");
    await queryInterface.removeColumn("settings", "locked");
    await queryInterface.removeColumn("teamMembers", "locked");
  },
};
