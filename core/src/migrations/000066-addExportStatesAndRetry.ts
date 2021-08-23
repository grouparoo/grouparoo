import { Op } from "sequelize";

import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("exports", "state", {
      type: DataTypes.STRING(191),
      allowNull: true,
    });

    await queryInterface.bulkUpdate(
      "exports",
      { state: "failed" },
      { state: null, errorMessage: { [Op.ne]: null } }
    );

    await queryInterface.bulkUpdate(
      "exports",
      { state: "complete" },
      { state: null, completedAt: { [Op.ne]: null } }
    );

    await queryInterface.bulkUpdate(
      "exports",
      { state: "pending" },
      { state: null }
    );

    await queryInterface.changeColumn("exports", "state", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await queryInterface.addColumn("exports", "sendAt", {
      type: DataTypes.DATE,
      allowNull: true,
    });

    await queryInterface.bulkUpdate(
      "exports",
      { sendAt: new Date() },
      { state: "pending" }
    );

    await queryInterface.addColumn("exports", "retryCount", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });

    await queryInterface.bulkUpdate("exports", { retryCount: 0 }, {});

    await queryInterface.changeColumn("exports", "retryCount", {
      type: DataTypes.INTEGER,
      allowNull: false,
    });

    await queryInterface.addIndex("exports", ["state"], {
      fields: ["state"],
    });

    await queryInterface.addIndex("exports", ["sendAt"], {
      fields: ["sendAt"],
    });

    await queryInterface.addIndex("exports", ["completedAt"], {
      fields: ["completedAt"],
    });

    await queryInterface.removeColumn("exports", "mostRecent");
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("exports", "state");
    await queryInterface.removeColumn("exports", "sendAt");
    await queryInterface.removeColumn("exports", "retryCount");
  },
};
