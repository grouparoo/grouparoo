import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.renameColumn(
      "imports",
      "recordUpdatedAt",
      "importedAt"
    );

    await queryInterface.removeColumn("imports", "groupsUpdatedAt");

    await queryInterface.addColumn("imports", "state", {
      type: DataTypes.STRING(191),
      allowNull: true,
    });

    await queryInterface.sequelize.query(
      `UPDATE "imports" SET "state"='failed' WHERE "errorMessage" IS NOT NULL AND "state" IS NULL`
    );

    await queryInterface.sequelize.query(
      `UPDATE "imports" SET "state"='associating' WHERE "recordAssociatedAt" IS NULL AND "state" IS NULL`
    );

    await queryInterface.sequelize.query(
      `UPDATE "imports" SET "state"='importing' WHERE "recordAssociatedAt" IS NOT NULL AND "importedAt" IS NULL AND "state" IS NULL`
    );

    await queryInterface.sequelize.query(
      `UPDATE "imports" SET "state"='exporting' WHERE "recordAssociatedAt" IS NOT NULL AND "importedAt" IS NOT NULL AND "exportedAt" IS NULL AND "state" IS NULL`
    );

    await queryInterface.sequelize.query(
      `UPDATE "imports" SET "state"='complete' WHERE "recordAssociatedAt" IS NOT NULL AND "importedAt" IS NOT NULL AND "exportedAt" IS NOT NULL AND "state" IS NULL`
    );

    await queryInterface.changeColumn("imports", "state", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await queryInterface.addIndex("imports", ["state"], {
      fields: ["state"],
    });
  },

  down: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.removeColumn("imports", "state");
    await queryInterface.renameColumn(
      "imports",
      "importedAt",
      "recordUpdatedAt"
    );

    await queryInterface.addColumn("imports", "groupsUpdatedAt", {
      type: DataTypes.DATE,
      allowNull: true,
    });

    await queryInterface.sequelize.query(
      `UPDATE "imports" SET "groupsUpdatedAt"="recordUpdatedAt"`
    );
  },
};
