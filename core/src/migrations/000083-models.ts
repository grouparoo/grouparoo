import Sequelize from "sequelize";

const default_model = {
  id: "mod_profiles",
  name: "Profiles",
  type: "profile",
};

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    let toCreteModel = false;
    const [sources] = await queryInterface.sequelize.query(
      `SELECT * FROM "sources" WHERE "locked" IS NOT NULL`
    );
    const [destinations] = await queryInterface.sequelize.query(
      `SELECT * FROM "destinations" WHERE "locked" IS NOT NULL`
    );
    if (sources.length > 0 || destinations.length > 0) toCreteModel = true;

    if (toCreteModel) {
      await queryInterface.sequelize.query(`
INSERT INTO "models" ("id", "name", "type", "createdAt", "updatedAt")
VALUES ('${default_model.id}', '${default_model.name}', '${default_model.type}', NOW(), NOW());
      `);
    }

    await queryInterface.addColumn("models", "locked", {
      type: DataTypes.STRING(191),
      allowNull: true,
    });

    await queryInterface.addColumn("records", "modelId", {
      type: DataTypes.STRING(191),
      defaultValue: default_model.id,
      allowNull: true,
    });

    await queryInterface.changeColumn("records", "modelId", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await queryInterface.addColumn("sources", "modelId", {
      type: DataTypes.STRING(191),
      defaultValue: default_model.id,
      allowNull: true,
    });

    await queryInterface.changeColumn("sources", "modelId", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await queryInterface.addColumn("groups", "modelId", {
      type: DataTypes.STRING(191),
      defaultValue: default_model.id,
      allowNull: true,
    });

    await queryInterface.changeColumn("groups", "modelId", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await queryInterface.addColumn("destinations", "modelId", {
      type: DataTypes.STRING(191),
      defaultValue: default_model.id,
      allowNull: true,
    });

    await queryInterface.changeColumn("destinations", "modelId", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("models", "locked");
    await queryInterface.removeColumn("records", "modelId");
    await queryInterface.removeColumn("sources", "modelId");
    await queryInterface.removeColumn("groups", "modelId");
    await queryInterface.removeColumn("destinations", "modelId");
  },
};
