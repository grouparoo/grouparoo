import { Op } from "sequelize";

export default {
  up: async function (migration, DataTypes) {
    await migration.addColumn("exports", "state", {
      type: DataTypes.STRING(191),
      allowNull: true,
    });

    await migration.bulkUpdate(
      "exports",
      { state: "failed" },
      { state: null, errorMessage: { [Op.ne]: null } }
    );

    await migration.bulkUpdate(
      "exports",
      { state: "complete" },
      { state: null, completedAt: { [Op.ne]: null } }
    );

    await migration.bulkUpdate(
      "exports",
      { state: "pending" },
      { state: null }
    );

    await migration.changeColumn("exports", "state", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await migration.addColumn("exports", "sendAt", {
      type: DataTypes.DATE,
      allowNull: true,
    });

    await migration.bulkUpdate(
      "exports",
      { sendAt: new Date() },
      { state: "pending" }
    );

    await migration.addColumn("exports", "retryCount", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });

    await migration.bulkUpdate("exports", { retryCount: 0 });

    await migration.changeColumn("exports", "retryCount", {
      type: DataTypes.INTEGER,
      allowNull: false,
    });

    await migration.addIndex("exports", ["state"], {
      fields: ["state"],
    });

    await migration.addIndex("exports", ["sendAt"], {
      fields: ["sendAt"],
    });

    await migration.addIndex("exports", ["completedAt"], {
      fields: ["completedAt"],
    });

    await migration.removeColumn("exports", "mostRecent");
  },

  down: async function (migration) {
    await migration.removeColumn("exports", "state");
    await migration.removeColumn("exports", "sendAt");
    await migration.removeColumn("exports", "retryCount");
  },
};
